#!/usr/bin/env python3
"""출판사에서 받은 MP3(폴더 또는 zip)를 사이트가 찾는 이름으로 정리합니다.

사용법:  python3 tools/organize_audio.py <폴더 또는 .zip> [--cd 1]
결과:    audio/cd{CD}-{트랙2자리}.mp3  (예: audio/cd1-05.mp3, audio/cd2-23.mp3)

파일명에서 숫자를 읽습니다. 'CD1/Track05.mp3'처럼 폴더에 CD 번호가 있거나,
'1-05.mp3', 'cd2_23.mp3' 형태면 자동 인식합니다. 인식 실패 파일은 목록으로 알려 줍니다.
폴더 하나가 CD 한 장이면 --cd 로 번호를 지정하세요.
"""
import re, shutil, sys, zipfile, tempfile
from pathlib import Path

def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__); sys.exit(1)
    cd_force = None
    if "--cd" in args:
        i = args.index("--cd"); cd_force = int(args[i+1]); del args[i:i+2]
    src = Path(args[0]); out = Path(__file__).resolve().parent.parent / "audio"
    out.mkdir(exist_ok=True)
    tmp = None
    if src.suffix.lower() == ".zip":
        tmp = tempfile.mkdtemp(); zipfile.ZipFile(src).extractall(tmp); src = Path(tmp)
    done, fail = 0, []
    for f in sorted(src.rglob("*")):
        if f.suffix.lower() not in (".mp3", ".m4a", ".wav", ".ogg") or f.name.startswith("."):
            continue
        cd = cd_force
        m = re.search(r"(?:cd|CD)\s*[_-]?\s*(\d)", str(f.relative_to(src)))
        if cd is None and m: cd = int(m.group(1))
        t = re.search(r"(?:track|pista|tr)?\s*[_-]?\s*(\d{1,2})\D*$", f.stem, re.I)
        m2 = re.match(r"^(\d)[-_ ](\d{1,2})$", f.stem)
        if m2: cd, tr = int(m2.group(1)), int(m2.group(2))
        elif cd and t: tr = int(t.group(1))
        else: fail.append(str(f)); continue
        dest = out / f"cd{cd}-{tr:02d}{f.suffix.lower()}"
        shutil.copy2(f, dest); done += 1
    print(f"{done}개 정리 완료 → {out}")
    if fail:
        print("인식하지 못한 파일:"); [print("  ", x) for x in fail]
    if tmp: shutil.rmtree(tmp, ignore_errors=True)

if __name__ == "__main__":
    main()

# MajorLink HTML 최초 업로드 및 배포 기록

## 목적

이 문서는 MajorLink 정적 HTML 산출물이 GitHub 업로드 이전에 로컬 업로드용 폴더로 생성되어 있었고, 이후 GitHub에 보관되었음을 정리하기 위한 보조 증빙 자료입니다.

## 요약

| 구분 | 확인된 시각 | 기준 | 비고 |
|---|---|---|---|
| 로컬 HTML 생성 시각 | 2026-05-13 10:56:51 KST | macOS 파일 생성 시각 | `MajorLink_upload/index.html` |
| 로컬 HTML 수정 시각 | 2026-05-13 11:11:35 KST | macOS 파일 수정 시각 | `MajorLink_upload/index.html` |
| GitHub 최초 업로드 시각 | 2026-05-21 21:18:09 KST | Git commit metadata | `Initial MajorLink static preview` |
| 실제 서비스 주소 | 확인일: 2026-05-21 | 공개 URL 접속 확인 | https://juwwkd.dothome.co.kr/MajorLink/ |

## 로컬 HTML 산출물 기록

확인 대상:

```text
/Users/juyoung/Desktop/무제 폴더/MajorLink_upload/index.html
/Users/juyoung/Desktop/무제 폴더/MajorLink_upload/index-print.html
```

확인된 파일 메타데이터:

```text
파일: /Users/juyoung/Desktop/무제 폴더/MajorLink_upload/index.html
생성(Birth): 2026-05-13 10:56:51 +0900
수정(Modify): 2026-05-13 11:11:35 +0900
변경(Change): 2026-05-13 11:11:35 +0900

파일: /Users/juyoung/Desktop/무제 폴더/MajorLink_upload/index-print.html
생성(Birth): 2026-05-13 10:56:51 +0900
수정(Modify): 2026-05-13 11:11:35 +0900
변경(Change): 2026-05-13 11:11:35 +0900
```

## 로컬 HTML 파일 해시

아래 해시는 현재 GitHub에 업로드된 HTML 파일 해시와 동일합니다.

| 파일 | SHA-256 |
|---|---|
| `index.html` | `1f57d6032d0a69212f49e9416f1d15e0926571b0eaee38eb554192c816ba3df6` |
| `index-print.html` | `d8ababba85cfe59c267e7ee6f07674bc8078a6b16819f0c8adb8576e460e9370` |
| `styles.css` | `722488ecb01e7d4f5712b2b8ec45c6e41c7c9a17ad3c44368c679bc23bf54f76` |
| `bundle.js` | `1d4b7c69ca316515deff67be4464498b2e39ee29d7ce0ebdb469113352d6c710` |
| `print-bundle.js` | `6c7e2ca838915f7d4ccb60cc423afa39dedfff1d01f6c3f561e03d6d20f70459` |

## GitHub 업로드 기록

GitHub 최초 업로드 커밋:

| 항목 | 내용 |
|---|---|
| Commit | `e8f7d0f0f43e6bb5d95d498c835e020ae29e3939` |
| Commit message | `Initial MajorLink static preview` |
| AuthorDate | `2026-05-21T21:18:09+09:00` |
| CommitDate | `2026-05-21T21:18:09+09:00` |
| Commit URL | https://github.com/FutureAria/Major/commit/e8f7d0f0f43e6bb5d95d498c835e020ae29e3939 |

관련 캡처:

```text
문서/증빙자료/GitHub_업로드_캡처/HTML_최초업로드_커밋_2026-05-21_21-18-09_KST.png
```

## 로컬 파일 생성/수정일 캡처

로컬 파일 메타데이터를 사람이 확인하기 쉽게 정리한 캡처를 함께 보관합니다.

```text
문서/증빙자료/로컬파일_생성일_캡처/MajorLink_로컬_HTML_생성수정일_캡처_2026-05-21.png
```

## 닷홈 공개 URL 확인 기록

확인 URL:

```text
https://juwwkd.dothome.co.kr/MajorLink/
https://juwwkd.dothome.co.kr/MajorLink/index.html
```

확인 결과:

```text
HTTP/1.1 200 OK
Date: Thu, 21 May 2026 13:13:45 GMT
Server: Apache
Content-Type: text/html; charset=UTF-8
```

주의:

- 닷홈 공개 HTTP 응답에는 `Last-Modified` 헤더가 없어 외부 요청만으로 서버 업로드 시각을 확정할 수 없었습니다.
- 닷홈에 실제로 먼저 업로드되었다는 강한 증빙이 필요하면 닷홈 관리자 페이지, 웹FTP, 또는 FileZilla 화면에서 `MajorLink/index.html`의 수정일이 보이는 캡처를 추가로 보관하는 것이 좋습니다.

## 증빙 해석

- 현재 확인 가능한 로컬 파일 메타데이터 기준으로 MajorLink HTML 산출물은 2026-05-13 오전에 생성 및 수정되어 있었습니다.
- GitHub 업로드는 2026-05-21 21:18:09 KST에 이루어졌으므로, GitHub 업로드는 최초 제작 시점이 아니라 보관 및 공개 증빙을 위한 후속 업로드로 보는 것이 정확합니다.
- 닷홈 서버의 정확한 업로드 시각은 공개 헤더만으로는 확인되지 않았습니다.

## 한계

이 문서는 파일 메타데이터, 해시, GitHub 커밋 기록, 공개 URL 응답을 기반으로 한 보조 증빙입니다. 법적 분쟁 대응이나 권리 확정을 완전히 보장하지는 않습니다.

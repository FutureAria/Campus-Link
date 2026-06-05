# Campus Link 최신 배포 기록 - 2026-06-05

## 목적

이 문서는 `MajorLink`로 제작되어 있던 정적 HTML 기반 MVP 프로토타입을 `Campus Link (캠퍼스 링크)` 기준으로 정리하고, 2026-06-05 기준 최신 공개 URL과 GitHub 저장소에 반영한 사실을 기록하기 위한 증빙 문서입니다.

## 변경 전/후

| 구분 | 변경 전 | 변경 후 |
|---|---|---|
| 서비스명 | MajorLink | Campus Link |
| 팀명 | MajorLink 또는 Major | Campus Link |
| GitHub 저장소 | `https://github.com/FutureAria/Major` | `https://github.com/FutureAria/Campus-Link` |
| 공개 URL | `https://juwwkd.dothome.co.kr/MajorLink/` | `https://juwwkd.dothome.co.kr/Campus-Link/` |
| 제출 기준 분야 | 디지털 테크 | 디지털 테크 |

## 배포 대상

- 정적 HTML 기반 MVP 프로토타입
- 주요 파일:
  - `index.html`
  - `index-print.html`
  - `styles.css`
  - `bundle.js`
  - `print-bundle.js`
  - `vendor/react.min.js`
  - `vendor/react-dom.min.js`
- 서버 반영 경로:
  - `/html/Campus-Link/`
- 공개 URL:
  - `https://juwwkd.dothome.co.kr/Campus-Link/`

## 검증 내용

- 공개 URL HTTP 200 응답 확인
- 원격 `index.html` 제목이 `Campus Link` 기준으로 반영된 것 확인
- 원격 `index.html`, `bundle.js`에서 구 명칭 화면 표기 제거 확인
- 업로드 패키지 SHA-256:
  - `8f75f2b15653934524346f60e6250a8e3037684ce8b33e780282b5cbc0628a7d`

## 공개 범위

GitHub 공개 저장소에는 아래 항목만 반영합니다.

- 정적 HTML/CSS/JS 기반 MVP 프로토타입 코드
- README 및 공개 설명 문서
- 제작 과정과 변경 이력을 설명하는 증빙 문서
- 공개해도 되는 발표자료, 기획자료, 회의록, 캡처 자료

아래 항목은 공개 저장소에 포함하지 않습니다.

- 공모전 제출용 최종 작성본 중 개인정보가 포함될 수 있는 파일
- 실제 연락처, 학번, 계정 정보
- 서버 접속 정보, FTP 정보, 비밀번호, API 키 등 비밀 정보
- 비공개 알고리즘 세부 산식 또는 영업상 민감할 수 있는 내부 기준

## 표현 기준

- 현재 단계는 정적 HTML 기반 MVP 프로토타입 및 초기 검증 단계입니다.
- `AI 자동 매칭 구현 완료`처럼 실제 구현 범위를 넘어서는 표현은 사용하지 않습니다.
- 구 명칭 `MajorLink`는 변경 전/후 이력을 설명하는 경우에만 사용합니다.

# JabTrainingAdmin

잽 트레이닝 예약 앱의 Local Admin을 관리하는 repository

# How to Install

## Node JS 설치하기

- 설치 페이지 : https://nodejs.org/en
- Powershell에서 node, npm 설치 여부 확인하기

```
npm init -y
npm install express
```

## 서버 테스트

`node server.js` 명령어 사용 시 http://localhost:3000에서 서버가 실행되어야 함

## 서버 실행을 편하게 만들기 위한 배치파일 작성

cd 명령어 쪽 절대경로 수정하기
start_server => bat
start_background => vbs

## 컴퓨터 부팅 시 자동으로 시작될 수 있게 하기

1. Window Key + R 실행
2. `shell:startup` 실행
3. 부팅되고자 하는 해당 파일 복사
4. 재부팅 후 확인하기

# Reference & Trouble Shooting

## npm: 이 시스템에서 스크립트를 실행할 수 없으므로...

- https://nayha.tistory.com/769

## 윈도우 PC 부팅 시 프로그램 자동 실행되도록 하기

- https://javaoop.tistory.com/103

## bat 파일 백그라운드 \_vbs

- https://coconuts.tistory.com/305#google_vignette

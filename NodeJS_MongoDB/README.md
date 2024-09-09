[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://github.com/MinSungJe/FrontEnd_Prac)
# 📝 Node.js / MongoDB 연습장
## 🗒️Last Update : 2024-09-10
<details>
<summary><b>🤔 Node.js의 정체와 특징</b></summary>

- ❗<b>Node.js: 컴퓨터 어디서든 JS를 실행시킬 수 있는 실행기 (= 멋진 용어로 JS 런타임)</b>
    - 크롬브라우저 내 자바스크립트 실행엔진인 V8을 똑떼어서 실행파일로 출시한 것
    - 따라서 JS로 코드에디터나 윈도우 프로그램을 만들 수 있게 됨 => 서버도 개발해보자!
- 특징: ❗<b>Non-blocking / 비동기 처리가 매우 쉬움</b>
    - 물론 스레드를 늘리거나 속도를 늘려도 해결가능하지만 데이터의 정확도가 떨어질 수 있음(동시에 같은 작업을 하려고 보니 누가 해버림)
- 단점: ❗<b>CPU를 많이 갈궈야하는 작업의 경우 싱글스레드라 성능이 좋지 않음</b>
    - 이미지 변환, 동영상 압축, 숫자계산 등에 처리가 좋지 않음
    - 따라서 ❗<b>비교적 가벼운 요청을 많이 처리해야하는 서비스에 많이 쓰임</b>
        - SNS, 게시판 등..
</details>

<details>
<summary><b>🤔 Node.js, Express 설치기사입니다</b></summary>

- 기본 셋팅
    - nodejs LTS 설치 (npm도 자동으로 같이 설치 됨)
- 프로젝트 생성
    1. 작업용 폴더 열기
    2. 해당 폴더에 server.js 생성
    3. 해당 폴더에 터미널을 열고 <code>npm init -y</code> 입력
        - package.json 파일을 생성해주는 명령어
        - 이제 npm으로 라이브러리 설치가 가능함
    4. 터미널에 <code>npm install express</code> 입력
        - ❗<b>Express: JS로 서버 만드는 라이브러리</b>
    5. server.js 파일 안에 서버코드 작성
        ```js
        // express 라이브러리 불러오는 코드
        const express = require('express')
        const app = express()

        // 해당 포트(8080)에 서버 띄워주셈
        app.listen(8080, () => {
            console.log('http://localhost:8080 에서 서버 실행중')
        })

        // 누군가 내 사이트 메인페이지 접속하면(get요청) 반갑다 글자 보내주셈
        app.get('/', (요청, 응답) => {
            응답.send('반갑다')
        }) 
        ```
    6. 터미널 열어서 작성한 server.js 실행(<code>node server.js</code>)
    7. 뚫어놓은 포트번호 이용해서 페이지 접속
- ❗<b>PORT란? 외부에서 내 컴퓨터로 접속할 수 있도록 뚫어놓는 구멍번호</b>
</details>
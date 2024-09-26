[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://github.com/MinSungJe/FrontEnd_Prac)
# 📝 Node.js / MongoDB 연습장
## 🗒️Last Update : 2024-09-26
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

<details>
<summary><b>🤔 여러 페이지들 보내려면 routing</b></summary>

- ❗<b>라우팅: URL을 기반으로 각각 다른 페이지나 자료를 보내는 기법</b>
- Express에서 라우팅하는 방법은 아래와 같음
    ```js
    app.get('/URL들어가는곳', (요청, 응답)=>{
        응답.send('보내줄 웹페이지 내용')
    }) 
    ```
- 글 말고 HTML 파일 보내려면 <code>응답.sendFile()</code> 사용
- <code>__dirname</code>: 현재 <code>server.js</code>가 들어있는 폴더 위치를 나타냄
    ```js
    app.get('/URL들어가는곳', function(요청, 응답) {
        응답.sendFile(__dirname + '/index.html') // html 파일 주소를 넣음
    })
    ```
</details>

<details>
<summary><b>🤔 (꿀팁) server.js에 변경사항 있을 때마다 껐다키는게 귀찮아요</b></summary>

- ❗<b>nodemon 사용하면 해결가능!</b>
- 설치: <code>npm install -g nodemon</code>
- 사용
    1. 서버파일 실행시킬 때 node말고 <code>nodemon server.js</code>
    2. 그러면 소스코드를 변경 후 파일 저장하면 얘가 알아서 서버 재시작해줌
</details>

<details>
<summary><b>🤔 static 파일 첨부하기</b></summary>

- static 파일: css, js, 이미지파일 등 서비스 중 변경점이 별로 없는 파일
- 방법: <b>static 파일을 하나의 폴더(public)에 몰아넣고 서버에 그 폴더를 등록!</b>
    1. public 폴더를 만들어서 넣고싶은 static 파일 넣기
    2. 서버에 등록
        ```js
        (server.js)
        app.use(express.static(__dirname + '/public'));
        ```
    3. 이후 html 파일에서 사용 가능, 이때 경로는 등록한 폴더를 제외하고 사용
        ```html
        <!-- /public/main.css가 아니라 /main.css임 -->
        <link href="/main.css" rel="stylesheet">
        ```
- static 파일을 이용해 css, js로 html을 꾸미거나 이미지파일을 html에 보여줄 수 있음
</details>

<details>
<summary><b>🤔 MongoDB 구조 소개</b></summary>

- Database > Collection > Document 순
- <b>Database</b>: 프로젝트 이름
- <b>Collection</b>: Document들을 담는 폴더
- <b>Document</b>: 데이터 하나를 담는 문서, JS Object랑 똑같은 모습으로 저장함
</details>

<details>
<summary><b>🤔 MongoDB와 서버를 연결해봅시다</b></summary>

- 사용자가 DB에 직접 접근하게 하지 않고, 서버를 중간에 두는 게 일반적임
- 서버 - DB 통신하는 법
    1. MongoDB 라이브러리 설치
        ```cmd
        npm install mongodb@5
        ```
    2. server.js에 해당 코드 작성(mongoDB 라이브러리 사용법)
        ```js
        const { MongoClient } = require('mongodb')

        let db
        const url = 'mongodb사이트에 있던 님들의 DB 접속 URL'
        new MongoClient(url).connect().then((client)=>{
            console.log('DB연결성공')
            db = client.db('데이터베이스이름')

            // 서버 띄우는 코드도 여기에 넣는게 좋음
            app.listen(8080, () => {
                console.log('http://localhost:8080 에서 서버 실행 중임')
            })
        }).catch((err)=>{
            console.log(err)
        })
        ```
    3. 내용 찾아서 넣기
- 데이터베이스에 Document 하나 작성하려면 <code>.insertOne()</code>
    ```js
    app.get('/news', (요청, 응답) => {
        db.collection('post').insertOne({title: '어쩌구'})
    })
    ```
</details>

<details>
<summary><b>🤔 MongoDB에 있는 데이터를 출력해봅시다</b></summary>

- DB에 있는 모든 데이터 출력하는 방법: <code>await db.collection('post').find().toArray()</code>
    ```js
    app .get('/list', async (요청, 응답) => {
        let result = await db.collection('post').find().toArray()
        console.log(result)
        응답.send('DB에 있던 게시물 보여줄 페이지임')
    })
    ```
    - await은 이 코드 다 실행될 때까지 기다려주세요~ 라는 뜻
    - await은 async 함수 안에서만 사용 가능
    - (참고) await은 Promise 앞에만 붙일 수 있음
</details>

<details>
<summary><b>🤔 이제 DB에서 출력한 데이터를 페이지에 꼽아봅시다</b></summary>

- HTML 페이지에 DB에서 가져온 정보를 꼽으려면 <b>template engine</b>을 사용해야 함
- 대표적인 template engine인 ejs 사용법
    1. <code>npm install ejs</code>로 라이브러리 설치
    2. server.js 상단에(app.use 밑) 코드 작성
        ```js
        app.set('view engine', 'ejs')
        ```
    3. 루트 폴더에 views폴더 만들고 ~~~.ejs 파일 작성
        - .ejs파일: html파일인데 안에 서버데이터 넣을 수 있는 것 뿐임
    4. server.js에서 <code>응답.render('ejs파일경로(루트는 views)')</code>
- 서버 데이터를 ejs 파일에 넣으려면
    1. ejs 파일로 데이터 전송
        ```js
        app.get('/list', async (요청, 응답) => {
            let result = await db.collection('post').find().toArray()
            응답.render('list.ejs', {데이터이름작명: result})
        })
        ```
    2. ejs 파일 안에서 `<%= 데이터 이름 %>`
        ```html
        <div class="list-box">
            <h4><%=posts[0].title%></h4>
            <p><%=posts[0].content%></p>
        </div>
        ```
    - 참고: 이렇게 데이터를 박아넣는 작업은 서버사이드 렌더링임
        - 서버에서 html을 모두 만들고 클라이언트에 보내줌
        - (반대)클라이언트 사이드 렌더링: html 껍데기랑 데이터를 보내주고 클라이언트에서 조합
</details>

<details>
<summary><b>🤔 ejs 파일 안에서 자바스크립트 문법 사용하는 방법</b></summary>

- ❗<b>ejs 파일 안 어디서든지 자바스크립트 문법 사용가능</b>
- 이를 이용해 반복문 돌려서 DB 데이터를 여러번 페이지에 꼽을 수 있음
    - 사용법: `<% JS코드 %>`
    ```html
    <% for (let i = 0; i < posts.length; i++) { %>
        <div class="list-box">
          <h4><%=posts[i].title%></h4>
          <p><%=posts[i].content%></p>
        </div>
    <% } %>
    ```
</details>

<details>
<summary><b>🤔 다른 ejs 파일에 있는 html을 슬쩍하는 방법</b></summary>

- ❗<b>`include()`</b> 사용
    - 사용법: `<%- include(가져올ejs경로) %>`
        ```html
        <%- include('nav.ejs') %>
        ```
- ❗<b>(참고) `<%=%>`과 `<%-%>`의 차이</b>
    - <b>`<%=%>`</b>: html 태그의 문자라도 문자 그대로 나옴
    - <b>`<%-%>`</b>: html 태그의 문자를 html로 실제로 렌더링해줌
</details>

<details>
<summary><b>🤔 서버의 통신원리, 그리고 RESTful API</b></summary>

- 서버는 누가 요청하면 그대로 처리해주는 프로그램일 뿐임
- ❗<b>서버에게 요청을 할 때 정확한 특정형식을 맞춰야 처리를 해줄 수 있음</b>
    1. method: `GET`, `POST`, `PUT`, `UPDATE`, `DELETE`...
    2. url: `/어쩌구`
- 지금까지 짠 서버기능(=API)도 동일함
    ```js
    // /news로 get 요청받으면 작동하는 서버기능(API)
    app.get('/news', (요청, 응답) => {
        응답.send('오늘의 늬우스')
    })
    ```
- 서버가 유저에게 처리하는 과정은 알겠는데, 유저가 서버에게 요청하는 방법은 뭐가 있어?
    - GET요청 예시: 주소창에 URL입력
    - POST요청 예시: `<form>`태그 사용
- 유저는 어떤 url, method 적어야하는지 모르는데 어떻게 요청해야하는지 어케 앎?
    - 보통 웹페이지에 숨겨놓음(버튼누르면 POST 보내고, 뭐 누르면 GET요청 보내고..)
- ❗<b>REST API(좋은 API 디자인 하는 원칙 6가지)</b>
    - 요즘은 그냥 method, URL만 잘 기입해두면 관습적으로 REST하다고 부름
    1. Uniform Interface
        - 일관성있는 URL
        - 하나의 URL로는 하나의 데이터를 가져오게 디자인
    2. Client-server 역할 구분
        - 유저에게 서버역할을 맡기거나 DB를 직접 입출력하게 시키면 안됨
    3. Stateless
        - 요청들은 서로 의존성이 있으면 안되고 각각 독립적으로 처리되어야 함
    4. Cacheable
        - 서버가 보내는 자료들은 캐싱이 가능해야 함
    5. Layered System
        - 서버기능을 만들 때 레이어를 걸쳐서 코드가 실행되도록 만들어도 된다.
    6. Code on demand
        - 서버는 실행가능한 코드를 보낼 수 있음
- ❗<b>좋은 URL 작명 관습</b>
    - 동사보다는 명사 위주로
    - 띄어쓰기는 언더바(_) 대신 대시(-) 기호
    - 파일 확장자 쓰기 말기(.html 이른거)
    - 하위 문서들을 뜻할 땐 / 기호를 사용함 (하위폴더같은 느낌)
</details>

<details>
<summary><b>🤔 글 작성기능 구현</b></summary>

1. 글작성페이지에서 글써서 서버로 전송
    - 글작성페이지 만들기(특정 URL get 연결 및 ejs 연동)
        ```js
        app.get('/write', (요청, 응답) => {
            응답.render('write.ejs')
        })
        ```
    - 해당 페이지에 form태그 생성
    - form태그에 URL+method 추가해두기, input태그에 name속성 추가
        ```html
        <form class="form-box" action="/add" method="POST">
            <h4>글쓰기</h4>
            <input name="title" placeholder="글제목">
            <input name="content" placeholder="내용">
            <button type="submit">전송</button>
        </form>
        ```
2. 서버는 글을 출력해보고 검사
    - ❗<b>`요청.body`로 post 요청으로 받은 내용 출력 가능</b>
        ```js
        app.post('/add', (요청, 응답) => {
            console.log(요청.body)
        })
        ```
    - `요청.body` 잘 쓰려면 세팅 필요
        ```js
        app.use(express.json())
        app.use(express.urlencoded({extended:true}))
        ```
3. 글을 DB에 저장
    - 사용하는 DB의 데이터 저장 문법 사용
        ```js
        // MongoDB: insertOne()
        await db.collection('post').insertOne({데이터: '어쩌구~~'})
        ```
    - (참고) await 쓰는 db랑 통신하는 코드의 경우 `try-catch`문으로 에러방지 가능
</details>

<details>
<summary><b>🤔 유저의 요청 이후 서버의 응답 모음</b></summary>

- `응답.redirect('/URL')`: 요청끝내고 /URL로 이동시킴
- `응답.send('메세지')`: 메세지를 보냄
    - `응답.status(500).send('서버에러남')`: status를 통해 FE에게도 무슨 상황인지 전달 가능
</details>

[![Next.js](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://github.com/MinSungJe/FrontEnd_Prac)
# 📝 Next.js 연습장
## 🗒️Last Update : 2024-07-04
<details>
<summary><b>🤔 Next.js가 뭔가요?</b></summary>

- React 문법으로 프론트엔드부터 서버까지 만들어볼 수 있는 풀스택 프레임워크임
- 서버 사이드 렌더링을 쉽게 구현 가능
</details>

<details>
<summary><b>🤔 Next.js 개발환경 셋팅</b></summary>

- 작업폴더 터미널 열어서 <code>npx create-next-app@latest</code>
- 미리보기: <code>npm run dev</code>
- app폴더
    - page.js: 메인페이지임
    - layout.js: page.js를 감싸는 파일
    - globals.css: 모든 파일에 적용되는 CSS파일
    - XXX.module.css: XXX에만 적용되는 CSS파일
- api폴더
    - 서버기능 만드는 곳
- node_modules
    - 설치한 라이브러리 보관용 폴더
- public
    - 이미지나 static 파일 보관 용
- package.json
    - 설치한 라이브러리 자동으로 기록해줌
    - 터미널에서 쓸 수 있는 명령어도 기록해줌

</details>

<details>
<summary><b>🤔 React 버전 HTML/CSS(jsx) 문법 특징</b></summary>

- React에서 사용하는 HTML/CSS는 특징이 있음
    1. return() 안에 HTML 넣을 때 언제나 하나의 html태그로 시작해서 하나의 html태그로 끝나야 함
    2. class 넣고 싶으면 className
    3. HTML안에 변수 넣으려면 { 변수명 } (= 데이터바인딩 문법)
    4. style 속성 넣으려면 style={{ 어쩌구: '저쩌구', 어쩌구: '저쩌구'}}
        - object 자료형을 넣으므로 -(대쉬)기호 대신 대문자로 바꿔줘야 함

</details>

<details>
<summary><b>🤔 다른 페이지로 이동해보자</b></summary>

- 페이지를 나누는걸 라우팅이라고 함
- ❗<b>Next.js는 자동 라우팅을 지원</b>함
    - 예를 들어 /list로 접속시 목록 html을 보여주고 싶다면
        1. app 폴더 안에 list 폴더를 만들고
        2. 그 안에 page.js 만들어서 상품목록 html 넣어두면 됨
    - Next.js는 app 폴더 안에 있는 폴더들을 자동으로 url로 만들어줌
- 페이지 이동 링크 만들고 싶으면 위에서 Link라는 걸 import 해온 다음 a태그처럼 쓰면 됨
- ❗<b>중복되는 html은 layout.js 파일에 적으면 됨</b>
    - Next.js는 page.js를 보여줄 때 옆에 layout.js가 있다면 layout.js 내용 안에 page.js를 담아서 보여줌
    - 상위폴더에 layout.js가 있다면 그 안에 하위 폴더의 layout.js를 담아서 보여줌

</details>

<details>
<summary><b>🤔 Next.js에서 Image를 넣어봅시다</b></summary>

- 이미지는 그냥 public 폴더에 보관하고 필요한 페이지에 img 태그로 넣으면 됨
    - jsx에선 태그를 열었으면 항상 닫아야함
    - 이미지는 public 폴더에 보관하고 경로는 /부터 시작하면 됨(public 폴더에 있는 것들은 사이트 발행시 자동으로 사이트 root 경로로 이동하기 때문)
        ```html
        <img src="/port1.png" alt="설명"/> 
        ```
- 최적화된 이미지를 넣으려면 Image 태그를 import 후 사용
    - lazy loading & 사이트 최적화 & layout shift 방지 효과가 있음
    - 이미지 경로를 넣으려면 이미지를 상단에서 import 해온 뒤 넣어야 함
        ```jsx
        import Image from 'next/image'
        import 이미지 from '/public/port1.png'

        export default function Home() {
        return(
            <div>
            <Image src={이미지} alt="설명"/>
            <div/>
        )} 
        ```
    - 이미지 높이가 이상하다면 height: auto;
    - 다른 사이트에서 올려둔 이미지를 Image 태그에 절대경로로 넣고싶다면
        1. width, height 옵션을 넣어야 함
        2. 셋팅도 따로 해둬야 함
        ```jsx
        import Image from 'next/image'

        export default function Home() {
        return(
            <div>
            <Image src="https://placehold.co/500" width="500" height="500"/>
            <div/>
        )} 
        ```
</details>

<details>
<summary><b>🤔 Next.js의 컴포넌트는 2개지요</b></summary>

- <b>server component</b>
    - React 문법 Component처럼 아무데나 대충 만든 컴포넌트
    - html에 자바스크립트 기능 넣기 불가능
    - useState, useEffect 등 사용 불가
    - 로딩속도 빠름
    - 검색엔진 노출 유리
- <b>client component</b>
    - ❗<b>js파일 맨위에다 'use client' 넣은 뒤 아래 있는 컴포넌트</b>
    - html에 자바스크립트 기능 넣기 가능
    - React의 useState, useEffect 등 사용가능
    - 로딩속도 느림(자바스크립트 많이 필요, hydration 필요)
- 큰 페이지는 server component, JS기능 필요한 곳만 client component
</details>

<details>
<summary><b>🤔 데이터베이스 세팅하기</b></summary>

- 여기서는 MongoDB로 설명
- MongoDB에 데이터를 저장하고 이를 불러오기 위한 세팅을 해보자
    1. 작업 폴더에서 터미널 열고 <code>npm install mongodb</code>
    2. 아무데나 js 파일을 만들고(util/database.js)
        ```js
        import { MongoClient } from 'mongodb'
        const url = 'DB접속URL~~'
        const options = { useNewUrlParser: true }
        let connectDB

        if (process.env.NODE_ENV === 'development') {
        if (!global._mongo) {
            global._mongo = new MongoClient(url, options).connect()
        }
        connectDB = global._mongo
        } else {
        connectDB = new MongoClient(url, options).connect()
        }
        export { connectDB }
        ```
    3. DB 입출력이 필요한 곳에서 connectDB 변수를 가져다 쓰자
        ```js
        import { connectDB } from "/util/database.js"

        export default async function Home() {
        let client = await connectDB;
        const db = client.db('forum');
        let result = await db.collection('post').find().toArray();

        return (
            <main>
            {result[0].title}
            </main>
        )
        }
        ```
    - top-level await라는 기능을 이용해서 await가 붙는 db 부분을 export하는 부분에 같이 넣어도 되지만, 버전이 낮은 경우 지원하지 않는 기술이라 잘 쓰이진 않음
    - 다른 DB의 경우에도
        1. DB 조작 도와주는 라이브러리 설치
        2. DB 연결하는 코드 셋팅
        3. 라이브러리 사용법 대로 DB 입출력하는 코드 사용
    - ❗<b>DB 입출력하는 코드는 server component 안에서만 사용하자!</b>
        - client component 안에 적은 코드는 유저들도 쉽게 볼 수 있기 때문
</details>

<details>
<summary><b>🤔 (참고) await?</b></summary>

- mongodb 라이브러리에서 값을 불러올 때 await을 사용함
    - await는 promise를 뱉는 코드에 붙일 수 있음
    - 보통 javascript는 실행이 느린 코드가 있다면 전부 실행하지 않고 다음 코드로 넘어감
    - await을 붙여 해당 코드 실행을 전부 시키고 넘어가도록 설정 가능
    - await이 있는 함수의 경우 async를 붙여줘야 함
</details>

<details>
<summary><b>🤔 유사하게 만들 페이지가 너무 많아요 ㅜ</b></summary>

- ❗<b>Dynamic Route</b>를 사용해보자!
    - Next에서 새로운 url을 만들기 위해 만드는 폴더이름을 [url파라미터명]
    - 이렇게 만든 page에 props를 넣으면 props.params를 통해 폴더이름에 넣은 url 파라미터를 가져올 수 있음
        ```js
        export default async function Detail(props) {
        console.log(props)
        (생략)
        }
        ```
    - 즉, ❗<b>dynamic route</b>로 만든 URL에 적은 문자를 가져오고 싶으면 컴포넌트에서 params를 출력해보면 됨
</details>

<details>
<summary><b>🤔 (MongoDB) 데이터 하나만 가져오고 싶음요</b></summary>

- .findOne() 사용하면 됨
    - <code>db.collection(컬렉션명).findOne(찾을document내용)</code>
- 해당 document가 저장된 document 요소 하나를 가져옴
- 보통 게시글의 경우에는 id를 가져오는 것이 좋음
</details>

<details>
<summary><b>🤔 다른 페이지로 이동해보자 2</b></summary>

- Link 이외에 다른 방법으로 페이지 이동을 하려면 useRouter 쓰면 됨
- useRouter() 쓰면 자바스크립트 코드로 페이지이동을 시킬 수 있음
- 다만 ❗<b>use어쩌구 문법들은 client component 안에서만 사용할 수 있음</b>
    ```js
    'use client'

    import {useRouter} from 'next/navigation'

    export default function DetailLink(){
    let router = useRouter()
    return (
        <button onClick={()=>{ router.push('/') }}>버튼</button>
    )
    }
    ```
- Link 말고 사용하는 이유?: ❗<b>여러가지 재밌는 기능을 사용할 수 있음!</b>
    - <code>router.back()</code>: 뒤로 가기
    - <code>router.forward()</code>: 앞으로 가기
    - <code>router.refresh()</code>: soft refresh
    - <code>router.prefetch('/어쩌구')</code>: '/어쩌구'의 내용을 미리 로드함 -> 그 페이지를 방문할 때 속도가 매우 빨라짐
        - server component에서도 Link 태그를 이용하면 이 기능을 사용 가능(화면에 보이는 순간 자동으로 미리 로드)
- 이 외에 client component에서 현재 URL에 뭐가 적혀있는지 궁금하면
    ```js
    'use client'

    import {usePathname, useSearchParams, useParams} from 'next/navigation'

    export default function DetailLink(){
    let a = usePathname()
    let b = useSearchParams()
    let c = useParams()
    console.log(a)
    }
    ```
    - <code>usePathname()</code>: 현재 URL을 출력
    - <code>useSearchParams()</code>: search parameter(query string) 출력
    - <code>useParams()</code>: [dynamic route]에 입력한 내용을 출력
</details>

<details>
<summary><b>🤔 서버란 무엇인가</b></summary>

- 서버: 유저 요청을 받으면 이것저것 실행해주는 간단한 프로그램
    - 유저가 입력한 것을 바로 DB로 저장시켜버리면 큰 문제가 발생할 수 있음(이상한 것을 DB에 넣어버릴 수 있으므로)
    - ❗<b>따라서 서버를 거쳐서 서버단에서 예외처리 후 DB에 넣는게 좋음!</b>
- 서버의 기능은 URL과 method 이름을 붙여서 구분함
    - URL: 개발자 맘대로 작성
    - method: GET(데이터 출력), POST(입력), PUT(수정), DELETE(삭제)
- 서버로 POST 요청하려면 form 태그 이용
</details>

<details>
<summary><b>🤔 Next.js로 서버를 구현해보자</b></summary>

- ❗<b>Next.js에서 서버기능</b>을 만드려면!
    1. (app이랑 같은 경로 내)pages 폴더 안에 api 폴더를 만들고 거기에 js 파일을 아무이름으로 만듬
        - 이렇게 만든 파일과 폴더는 자동으로 서버 기능의 URL이 됨
            - URL: /api/폴더명
        - 해당 URL로 GET/POST/PUT/DELETE 요청하면 해당 js파일이 실행됨
    2. 해당 js 파일에 함수 하나 넣으면 그 함수 안 코드가 실행됨
        ```js
        export default function handler(요청, 응답) {
        console.log(123)
        }
        ```
        - GET 요청을 하는 가장 빠른 방법은 URL을 입력하는 것
    3. 서버는 요청을 받았으면 응답도 해주는 것이 좋음
        ```js
        export default function handler(요청, 응답) {
        응답.status(200).json('처리완료함')
        }
        ```
        - 서버 기능이 성공적으로 실행됐으면 <code>status(200)</code>
        - 서버 기능이 실패했다면 <code>status(500)</code>
        - 서버 기능이 유저때문에 실패한 경우 <code>status(400)</code>
        - 요청자에게 데이터도 보내주고 싶다면 <code>응답.json()</code> 안에 데이터 넣으면 됨(object, array, 문자, 숫자 싹다 가능)
    - (참고) 서버에서 method 종류마다 각각 다른 기능을 실행하고 싶으면 if문으로 구분 -> <code>요청.method == 'GET'?</code>
    - 서버 측에서 실행되는 코드들이기 때문에 DB 입출력하는 코드를 여기 작성해도 상관 없음
    - DB를 불러오는 도중에 발생하는 에러를 잡으려면 <code>try {} catch(error) {}</code> 문 활용
</details>

<details>
<summary><b>🤔 (MongoDB) 데이터를 수정하고 싶음요</b></summary>

- 역시 DB를 직접 수정하도록 하면 위험하므로 서버를 거쳐 수정을 시켜야 함
- 서버에 필요한 데이터가 없으면 유저단에서 새로 보내거나, DB 조회
- document 수정은 updateOne()
    ```js
    let result = await db.collection('post').updateOne({게시물정보}, { $set : {바꿀데이터}} );
    ```
    1. 요청.body에서 바꿀 데이터를 만들어서 updateOne()안에 집어넣음
    2. 요청.body._id 꺼내서 게시물정보를 만들어 updateOne()안에 집어넣음
    - (참고) $set은 덮어쓰기, $inc는 증감
</details>
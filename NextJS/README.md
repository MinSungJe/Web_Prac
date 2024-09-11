[![Next.js](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://github.com/MinSungJe/FrontEnd_Prac)
# 📝 Next.js 연습장
## 🗒️Last Update : 2024-09-11
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
    - 이미지 등 static 파일 보관 용
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
    - 작성한 코드를 유저들이 볼 수 있음
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

- ❗<b>Next.js에서 서버기능(=api)</b>을 만드려면!
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
<summary><b>🤔 (MongoDB) 데이터를 수정/삭제하고 싶음요</b></summary>

- 역시 DB를 직접 수정하도록 하면 위험하므로 서버를 거쳐 수정을 시켜야 함
- 서버에 필요한 데이터가 없으면 유저단에서 새로 보내거나, DB 조회
- document 수정은 updateOne()
    ```js
    let result = await db.collection('post').updateOne({게시물정보}, { $set : {바꿀데이터}} );
    ```
    1. 요청.body에서 바꿀 데이터를 만들어서 updateOne()안에 집어넣음
    2. 요청.body._id 꺼내서 게시물정보를 만들어 updateOne()안에 집어넣음
    - (참고) $set은 덮어쓰기, $inc는 증감
- document 삭제는 deleteOne()
    ```js
    let result = await db.collection('post').deleteOne({게시물정보});
    ```
</details>

<details>
<summary><b>🤔 HTML안에 JS기능을 써야하는데요</b></summary>

- 애니메이션을 주거나 나타나게 하는 등 ❗<b>javascript 기능은 client component에서만 사용 가능!</b>
- 문제는 client component는 검색노출이 잘 되지 않는다는 단점이 있음
    - ❗<b>client component에 적은 코드는 유저들이 볼 수 있어서 DB랑 직접 통신하는 코드는 적으면 안됨</b>
    - 보통 useEffect를 이용해 서버랑 통신 후 데이터를 가져오는데 이 경우 처음에는 텅 빈 html을 보여줌 
    - 검색 봇의 경우 텅빈 html만 보고 지나침 -> 검색노출 X
- ❗<b>따라서 부모 server component에서 DB 데이터를 가져온 후 JS기능이 필요한 부분만 자식 client component로 구현 후 props 전송하는 구성</b>이 좋음!
    - Next.js에선 server/client component들을 보여줘야할때 최대한 서버에서 미리 html을 만들어서 보냄
    - 따라서 client component도 DB데이터를 미리 채워서 유저에게 보여주도록 구현 가능
</details>

<details>
<summary><b>🤔 ajax를 사용해도 서버로 요청이 가능</b></summary>

- form태그 말고도 서버랑 요청하는 방법: AJAX
    - <code>fetch()</code> 함수 사용: GET, POST, PUT, DELETE 요청 가능
        ```jsx
        fetch('/URL')
        .then((r)=>{
        if(r.status == 200) {
            return r.json()
        } else {
            //서버가 에러코드전송시 실행할코드
        }
        })
        .then((result)=>{ 
        //성공시 실행할코드
        }).catch((error)=>{
        //인터넷문제 등으로 실패시 실행할코드
        console.log(error)
        })
        ```
    - axios 같은 외부 라이브러리 사용(fetch보다 더 짧음)
- 장점: 새로고침 없이 요청을 보낼 수 있음
</details>

<details>
<summary><b>🤔 서버로 데이터를 보내는 법</b></summary>

- fetch(): body에 넣기
- form 태그: input태그에 넣고 name 속성 주기
- query string: URL 뒤에 <code>?데이터이름1=값1&데이터이름2=값2</code> 입력가능
    - <code>요청.query</code>로 데이터를 받을 수 있음
    - 장점: 간단함, GET요청도 데이터 전송가능
    - 단점: 데이터 많으면 더러움, URL에 데이터 노출됨
- URL 파라미터 문법 이용: 전송하는 URL에 데이터를 넣어 전송
    1. URL parameter 문법 이용해서 api를 하나 구현([어쩌구].js / [어쩌구] 폴더)
    2. <code>요청.query</code>로 데이터를 받을 수 있음
</details>

<details>
<summary><b>🤔 서버로 array, object 전송하고 싶어요</b></summary>

- 서버랑은 원래 문자나 숫자만 주고받을 수 있음
    - 그러므로 array, object는 주고받기가 안됨
- 하지만 ❗<b>array, object에 따옴표를 쳐두면 문자취급이 됨 = JSON</b>
    - 직접 따옴표 칠 필요는 없고 내장함수가 있음
        ```js
        JSON.stringify( {name : 'Min'} ) // 문자화(stringify)
        ```
    - 받은 JSON을 다시 array/object로 바꾸고 싶을땐
        ```js
        JSON.parse( '{"name" : "Min"}' ) // 분석(parse)
        ```
</details>

<details>
<summary><b>🤔 static rendering? dynamic rendering?</b></summary>

- <code>npm run build</code>를 통해 프로젝트를 배포하면 페이지를 자동으로 rendering 해줌
- ㅇ 페이지는 static rendering 해줌(디폴트)
    - npm run build 할 때 만든 html페이지 그대로 유저에게 보냄
    - 미리 페이지 완성본을 만들어두므로 빠름
- λ 페이지들은 dynamic rendering 해줌
    - 유저가 페이지 접속마다 html 새로 만들어서 보내줌
    - 페이지의 기능이 있어 구성이 매번 바뀌는 경우 dynamic rendering이 됨
        - fetch('/URL', { cache: 'no-store' }) 로 데이터 가져오는 문법 
        - useSearchParams(), cookies(), headers() 
        - [dynamic route]
    - 강제로 dynamic rendering으로 바꾸기
        ```js
        export const dynamic = 'force-dynamic' // force-static, auto 

        export default function 페이지(){
        (생략)
        }
        ```
    - 단점: 매번 페이지를 불러와서 재구성하므로 서버/DB 부담이 커짐 -> 캐싱기능 사용 가능
</details>

<details>
<summary><b>🤔 캐싱기능이 뭐에요</b></summary>

- 캐싱: 결과를 잠깐 저장해두고 재사용
    - 값을 미리 어딘가 저장해두고 그 결과를 보여주므로 서버/DB에 부담이 적음
    - dynamic rendering 시 서버자원을 절약할 수 있음
- Next.js에선 페이지 캐싱 / GET 요청결과 캐싱이 쉽게 가능함
- GET 요청결과 캐싱하는 법(server component 안에서만 사용 가능)
    ```js
    fetch('/api/어쩌구', { cache: 'force-cache' }) // 사실 디폴트값임
    ```
    ```js
    fetch('/URL', { next: { revalidate: 60 } }) // 캐싱결과를 60초동안 보관하고 사용, 다 지나면 새로 요청
    ```
    ```js
    fetch('/URL', { cache: 'no-store' })  // 캐싱기능 안씀
    ```
- 페이지 캐싱 하는 법(DB 입출력코드 써놓은 거 캐싱)
    1. GET요청 시 DB 데이터 보내주는 서버 API 만들어두고 fetch()로 바꾸기
    2. revalidate 예약변수 쓰면 페이지단위 캐싱 가능
        ```js
        (아무 page.js 파일)

        export const revalidate = 60; // 60초마다 페이지 재생성 및 캐싱

        export default function Page() {
        DB입출력하는코드~~
        return (
            <div>어쩌구</div>
        )
        } 
        ```
</details>

<details>
<summary><b>🤔 회원기능을 만들어보고 싶어요</b></summary>

- 회원기능의 동작방식
    - 회원가입
        1. 유저가 가입하면 아이디랑 비번을 서버통해 DB에 저장
    - 로그인
        1. 유저가 로그인 시 아이디/비번을 서버로 보냄
        2. 서버는 DB에 있는 아이디/비번과 유저가 보낸 아이디/비번이 일치하는 경우 ❗<b>입장권을 발급</b>
    - 로그인이 필요한 서버기능
        1. 유저는 서버에 GET/POST로 데이터 요청 시 입장권도 같이 제시
        2. 서버는 입장권을 확인 후 데이터 및 페이지 보내줌

- 여기서 입장권이란?
    - 유저 정보가 써있는 간단한 문자자료
        - 이름, 로그인 날짜, 유효기간 등이 들어 있음
    - 보통은 브라우저의 쿠키 저장소를 이용해 유저측에 저장해둠
        - 서버로 GET/POST 요청 시 자동으로 함께 전송됨
        - 서버는 유저 브라우저의 쿠키공간에 입장권을 강제로 저장시켜둠(권한 있음)
    - session, token 방식이 있음
        - ❗<b>session 방식</b>
            1. 유저가 로그인하면 DB에 { 유저의 아이디, 로그인 날짜, 유효기간, session id } 저장
            2. 유저에게 입장권 발급할 때 session id 하나만 적어보냄
            3. 유저가 GET/POST 요청 시 입장권을 제출함
            4. 서버는 입장권에 써 있는 session id를 가지고 DB를 조회해본 다음 DB 기록에 별 이상 없으면 요청을 진행
            - 장점: 하나하나의 요청마다 엄격하게 유저 체크 가능
            - 단점: DB의 부담이 심해질 수 있음(Redis같은 DB를 사용해 빠르게 확인)
            - DB adapter 기능을 이용해 구현할 수 있음!
                1. 첫 로그인 시 자동으로 유저를 회원가입 시켜서 DB에 유저 회원정보를 보관함
                2. 로그인 시 자동으로 유저가 언제 로그인했는지 세션정보를 DB에 보관함
                3. 서버에서 지금 로그인된 유저정보가 필요하면 JWT가 아니라 DB에 있던 세션정보를 조회해서 가져옴
                4. 로그아웃 시 유저 세션정보는 DB에서 삭제됨
        - ❗<b>token 방식(= JWT(JSON Web Token))</b>
            1. 유저가 로그인하면 입장권에 { 유저의 아이디, 로그인 날짜, 유효기간 } 등을 적어두고 암호화해서 발행(DB엔 저장 X)
            2. 유저가 GET/POST 요청 시 유저가 입장권을 제출하면 해당 입장권을 까보고 이상없으면 통과
            - 장점: 요청마다 DB를 매번 조회하지 않아 DB 부담이 적음
            - 단점: 유저의 JWT를 훔쳐가면 그사람의 활동을 막는 방법이 없음

- 번외로 OAuth를 사용 가능
    - 한 사이트의 사용권한을 다른 사이트에서 잠깐 빌리는 과정을 정의하는 규칙
    - 소셜 로그인 구현 가능
    1. 유저가 한 사이트에서 구글 로그인 버튼을 누르면 구글 계정으로 로그인
    2. 이 사이트로 개인정보 전송하면 되는지 구글이 물어봄
    3. 유저가 허락하면 구글에서 사이트의 서버로 알림을 전송함
    4. 알림이 도착하면 그 서버는 구글에게 유저정보를 요청해서 받아옴
    5. 그 정보들로 입장권만들어서 사용(JWT 만들기, session으로 DB 저장 등..)

- Next.js에서는 Next-Auth (Auth.js) 라이브러리를 사용해서 쉽게 회원기능 구현 가능
</details>

<details>
<summary><b>🤔 .env 파일 활용하기</b></summary>

- 깃허브에 올리거나 js파일을 따로 공유할 때 암호나 중요한 문자열을 다른 파일로 빼둘 수 있음 -> .env 파일
- 중요정보를 하드코딩하지 않아도 됨!!
    1. 프로젝트 폴더(최상위 폴더)에 .env 파일 생성
    2. .env폴더 안에 내용 작성
        ```env
        작명1='보관할문자1'
        작명2='보관할문자2'
        ``` 
    3. 필요한 js파일 가서 <code>process.env.작명1</code>라고 쓰면 그 자리에 해당 데이터가 남게됨
</details>

<details>
<summary><b>🤔 이번엔 client-side rendering을 해보자</b></summary>

- server-side rendering
    - 서버에서 html을 전부 만들어서 보냄
    - 내용변경 시 새로고침 필요 O
- client-side rendering
    - 브라우저에서 html 생성, 수정, 삭제 가능
    - 내용변경 시 새로고침 필요 X
    - 부드럽고 이쁜 사이트를 만들 수 있지만 검색노출이 잘 안될 수 있음
- 내용을 변경하고 싶은 부분만 client component로 만들어서 server component에서 불러오면 됨
    - 새로고침 없이 페이지 내용 갱신 => ajax로 서버에 요청
        - state에 내용을 넣고 그 state를 넣어서 보냄(fetch 등 활용)
            ```js
            'use client'
            import {useState} from 'react'

            export default function Comment(props) {
                let [comment, setComment] = useState('')
                return (
                    <div>
                        <div>댓글목록</div>
                        <input onChange={(e)=>{ e.target.value }} />
                        <button onClick={()=>{ fetch('/URL', { method : 'POST', body : comment } ) }}>댓글전송</button>
                    </div>
                )
            } 
            ```
    - ❗<b>client component에서 DB 내용을 가져오고 싶다면 useEffect() 활용!</b>
        - <code>useEffect()</code>: 쓸데없는 코드 보관함, ajax나 타이머 등을 넣음
            - 특징1. html 로드/재렌더링 될 때마다 실행됨(조절가능)
            - 특징2. html 보여준 후 늦게 실행시작
</details>

<details>
<summary><b>🤔 데이터를 DB에 저장할 때 어떻게 저장해야 잘했다고 소문날까요</b></summary>

- ❗<b>나중에 데이터가 많아져도 저장, 수정, 삭제, 출력이 잘 되면 잘 저장한 것임</b>
    - 어려울 것 같으면 다른 document로 빼보자
</details>

<details>
<summary><b>🤔 로딩 중/에러났을때 UI을 만들어보자</b></summary>

- page.js 옆에 ❗<b>loading.js</b> 라는 파일 만들면 로드 전에 해당 내용을 먼저 보여줌
    - React에서 <code><Suspense fallback={<h4>로딩중</h4>}></code>와 역할이 같음
    - client component 사용 가능
- page.js 옆에 ❗<b>error.js</b> 라는 파일 만들면 에러날 경우 error.js 내용을 대신 보여줌
    - 여긴 무조건 client component
    - props: error(에러내용 알려줌), reset(해당 페이지를 다시 로드하는 함수)
        ```js
        'use client'

        export default function Error({error, reset}){
            return (
                <div>
                <h4>오 이런 에러남</h4>
                <button onClick={()=>{ reset() }}>다시시도</button>
                </div>
            )
        }
        ```
    - layout.js 내용에서 에러가 나면 같은 폴더가 아닌 상위에 있는 error.js가 실행됨
        ```html
        <Layout>
            <Error fallback={자식들 내용이 에러시 보여줄 error.js 내용}>
                <Loading fallback={자식들 내용이 로딩시 보여줄 loading.js 내용}>
                page.js 내용~~
                </Loading>
            </Error>
        </Layout>
        ```
        - 맨 바깥쪽 layout.js에 error.js를 적용하려면 global-error.js 이용
- 없는 URL로 접속하려는 경우 if문을 이용해 <code>notFound()</code>라는 함수를 실행시키도록 하면 ❗<b>not-found.js</b> 안의 내용을 대신 보여줌
- loading.js, error.js, not-found.js가 같은 폴더 내에 없다면 계속 상위 폴더로 찾아가면서 가장 가까운 파일을 보여줌
</details>

<details>
<summary><b>🤔 프로젝트 배포</b></summary>

- <code>npm run build</code> -> 코드짠걸 html, css, js로 바꿔줌
    - 이후 서버에서 <code>npm run start</code> 실행
- 내 컴퓨터 24시간 켜둘거 아니면 클라우드 서비스에서 컴퓨터를 빌려서 서버를 띄우자
    - 서비스 종류
        - AWS EC2
            - 컴퓨터 한대 빌리는 상품
            - nodejs 설치하고 내 소스코드 옮겨서 npm run build -> npm run start
            - 터미널을 다뤄야함
        - AWS Elastic Beanstalk
            - 코드만 업로드하면 자동으로 EC2 인스턴스 빌려서 작동해줌
        - Vercel
            - Github repo에 코드 올릴 때마다 그걸 자동으로 Elastic Beanstalk스럽게 배포해주는 식으로 동작
            - 서버에 하드디스크 사용 불가능
            - 홈페이지 들어가서 따라하면 됨
    - 배포 전 접속가능 IP를 모두 접속가능하도록 설정
    - 배포 방법
        1. 터미널 열어서 빌드: <code>npm run build</code>
        2. zip 파일로 압축
            - .next 폴더 필수
            - node_modules 폴더는 빼기
        3. 사용하려는 서비스에 맞춰 설정하기
</details>

<details>
<summary><b>🤔 브라우저의 저장소를 사용해보자</b></summary>

- 브라우저에는 여러 저장소가 있음
    - local storage
        - 브라우저를 청소하지 않는 한 5MB까지 계속 사용가능
        - <code>{'키' : '값'}</code>의 형태로 데이터를 저장함
        - 문자나 숫자만 넣을 수 있음
            - JSON 문법으로 문자로 변환한 Array와 Object도 보관가능
    - session storage
        - local과 차이점은 브라우저를 닫을 시 초기화 되는 저장소라는 거임
- 이 저장소 또한 JS문법이기에 ❗<b>client component에서만 사용가능!</b>
    - client component안에서도 미리 실행할 수 있는 건 미리 실행하기 때문에 useEffect를 이용해 실행시켜야 함
    - useEffect의 실행타이밍은 html이 다 불러와지고 실행됨
        ```js
        'use client'

        function 컴포넌트(){

        useEffect(()=>{
            // 현재 위치가 브라우저인지 서버인지 확인
            if (typeof window != 'undefined') {
                let res = localStorage.setItem('키', '값')
            }
        }, [])

        return (생략)
        } 
        ```
    - cookie
        - <code>{'키' : '값'}</code>의 형태로 데이터를 저장함
        - 사이트 하나 당 최대 50개, 총합 4KB의 문자데이터를 저장 가능
        - 서버에 GET, POST등 요청 시 자동으로 서버로 전달됨
        - 유효기간 설정 가능, 설정 안하면 브라우저 껐을 때 사라짐
        - 데이터 사용하는 법
            - 저장: <code>document.cookie='쿠키이름=값; max-age=3600'</code>
            - 수정도 동일함
            - 값 찾기: <code>('; ' + document.cookie).split('; 찾으려는키=').pop().split(';')[0]</code>
        - 위 storage들은 useEffect를 이용하기 때문에 html이 다 불러와지고 실행되는데, 이를 쿠키를 이용해 개선할 수 있음
        - ❗<b>쿠키는 server component나 서버 api에서 쉽게 읽을 수 있음!!</b>
            ```js
            import { cookies } from 'next/headers'

            export default function 서버컴포넌트(){
            let result = cookies().get('쿠키이름')
            console.log(result)
            } 
            ```
</details>

<details>
<summary><b>🤔 서버기능 중간에서 간섭해보자, middleWare</b></summary>

- 서버는 요청이 들어오면 응답해주는 간단한 프로그램임
- 근데 이 요청과 응답사이에서 간섭하는 코드를 짜고 싶다면 middleware를 사용하면 됨
- Next.js에서 middleware 사용하는 법
    - ❗<b>app폴더와 나란한 위치에(root) middleware.js 파일 만들고 함수하나 만들면 작성 가능</b>
        ```js
        (/middleware.js)

        import { NextResponse } from 'next/server'

        export async function middleware(request) {
            console.log(request.nextUrl)  //유저가 요청중인 URL 출력해줌
            console.log(request.cookies)  //유저가 보낸 쿠키 출력해줌
            console.log(request.headers)  //유저의 headers 정보 출력해줌 

            // 마지막에 아래 셋 중 하나를 적어주는게 좋음!!
            NextResponse.next()  //통과
            NextResponse.redirect()  //다른페이지 이동
            NextResponse.rewrite()  //다른페이지 이동
        } 
        ```
    - 예를 들어 이런 기능을 만들 수 있음
        1. 특정 페이지 접속하는 유저정보 기록
            ```js
            (/middleware.js)

            import { NextResponse } from 'next/server'

            export async function middleware(request) {
                if (request.nextUrl.pathname.startsWith('/list')) {
                    console.log(new Date().toLocaleString())
                    console.log(request.headers.get('sec-ch-ua-platform'))
                    return NextResponse.next()
                }
            } 
            ```
        2. 로그인 안된 유저들 특정 경로 막기
            - .env 파일에 NEXTAUTH_SECRET 넣어주고 사용(JWT 암호화해주는 키)
            ```js
            import { NextResponse } from 'next/server';
            import { getToken } from "next-auth/jwt";

            export async function middleware(request) {

            if (request.nextUrl.pathname.startsWith('/write')) {
                    const session = await getToken({ req : request })
                    // console.log('세션', session)
                    if (session == null) {
                        return NextResponse.redirect('http://localhost:3000/api/auth/signin'); 
                    }
                }
            } 
            ```
        3. 특정 페이지 접속 시 쿠키 만들어주기
            - 프론트엔드에서 useEffect 써서 만드는 쿠키를 여기서도 만들어줄 수 있음
            ```js
            import { NextResponse } from 'next/server';
            export async function middleware(request) {
                request.cookies.get('쿠키이름')  // 출력
                request.cookies.has('쿠키이름')  // 존재확인
                request.cookies.delete('쿠키이름')  // 삭제
                
                const response = NextResponse.next()
                response.cookies.set({
                    name: 'mode',
                    value: 'dark',
                    maxAge: 3600,
                    httpOnly : true // 자바스크립트로 맘대로 조작이 불가능하게 막음, 크롬개발자도구로 수정은 못막음
                })  
                return response  //쿠키생성
            } 
            ```
</details>

<details>
<summary><b>🤔 Next.js의 Server actions 기능</b></summary>

- 지금까지 서버기능은 API를 새로 생성해서 구현함
    - DB에 데이터를 저장하려면 당연히 서버를 거쳐야 함
    - 서버기능을 사용하려면 서버 파일로 이동해서 API를 작성해야 함
- 근데 새로 서버파일로 가서 새로 파일을 만들 필요 없이, ❗<b>page.js에서 전부 해결할 수 있음</b> => Server actions 기능!

- 사전 작업
    1. Next.js 13.4버전 이상에서만 작동
    2. next.config.js 파일 수정필요(14버전부터 수정 필요 X)

- server component에서 사용
    - 이전과 차이점: 폼 전송시 새로고침이 되지 않음 => <code>revalidatePath, revalidateTag</code> 사용
    ```js
    import { connectDB } from "@/util/database";
    import { revalidatePath } from "next/cache"

    // 1. 만드는 페이지
    export default async function Write2(){ 
        // DB에서 데이터 뽑아서 보여주기 위해 변수 선언
        const db = (await connectDB).db('forum')
        let result = await db.collection('post_test').find().toArray()

        // 3. 서버기능을 page.js에서 만들 수 있음!!
        async function handleSubmit(formData) {
            'use server';  // 이걸 넣어 서버 API로 만들어줄 수 있음
            const db = (await connectDB).db('forum')
            await db.collection('post_test').insertOne({title : formData.get('post1')})

            // 해당 URL에 있는 캐시 삭제 후 다시 생성 = 새로고침
            revalidatePath('/write2') 
        }

        // 2. 보여줄 폼
        return (
            <form action={handleSubmit}>
            <input type="text" name="post1" />
            <button type="submit">Submit</button>
            {
                result ? result.map((a)=>
                <p>글제목 : {a.title}</p>
                )
                : null
            }
            </form>
        )
    } 
    ```
- client component에서 사용
    - client에 서버기능이 보일 수 있으므로 따로 함수부분을 빼서 import 해오는 방식으로 구현
    - 근데 이럴거면 그냥 기존처럼 API 새로 구현하는게 나을듯
</details>

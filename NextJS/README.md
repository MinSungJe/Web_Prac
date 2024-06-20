[![Next.js](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://github.com/MinSungJe/FrontEnd_Prac)
# 📝 Next.js 연습장
## 🗒️Last Update : 2024-06-18
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
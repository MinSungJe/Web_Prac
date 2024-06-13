[![Next.js](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://github.com/MinSungJe/FrontEnd_Prac)
# 📝 Next.js 연습장
## 🗒️Last Update : 2024-06-14
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
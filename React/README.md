[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://github.com/MinSungJe/FrontEnd_Prac)
# 📝 React 연습장
## 🗒️Last Update : 2024-04-01
<details>
<summary><b>🤔 React Project 생성법</b></summary>

- <code>npx create-react-app [project 이름]</code>
- 미리보기 : <code>npm start</code>
</details>

<details>
<summary><b>🤔 State 왜 씀?</b></summary>

- 실시간으로 변경되는 값을 사용하기 위해 사용
- <code>setState(실제 변경값, 변경함수)</code>
- state는 부모 컴포넌트에서 자식 컴포넌트로만 전송이 가능하기 때문에, 해당 state를 사용하는 최상위 컴포넌트에서 정의해야 됨
</details>

<details>
<summary><b>🤔 Component 문법</b></summary>

- 특정 div박스 묶음을 한 박스로 정리 가능
    - 코드가 지저분한 점을 해결 가능
    - 한번 작성한 컴포넌트를 쉽게 반복 가능
- js에서 function 정의하듯이 Component를 생성하면 됨
```javascript
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.idx]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}
```
</details>

<details>
<summary><b>🤔 동적 UI 만드는 방법</b></summary>

- ❗<b>3 step</b>
    1. html css로 미리 UI 디자인을 다 해놓고
    2. UI의 현재 상태를 state로 저장해두고 (보이기 여부 : true, false 등)
    3. state에 따라서 UI가 어떻게 보일지 조건문 등으로 작성
- 참고. html 내 조건문 사용하려면 삼항연산자 활용
</details>

<details>
<summary><b>🤔 html 내에서 반복문 쓰기(map())</b></summary>

- ❗<b>map함수 사용법 :</b> <code>[list].map(function(){})</code>
- function 파라미터를 지정하면 list의 인자를 넘겨줌
- function으로 특정 값을 return하면 return된 값으로 리스트를 새로 만들어줌
- return을 안해서 반복문으로 활용도 가능
- 굳이 for 쓰고 싶다면 js부분(html 바깥)에서 사용하면 됨
</details>

<details>
<summary><b>🤔 자식 컴포넌트가 부모 컴포넌트의 요소를 쓰고 싶어요</b></summary>

- 자식 컴포넌트에서 부모 컴포넌트의 요소를 사용하고 싶은 상황이 생김
- 예) 자식 컴포넌트에서 부모 컴포넌트의 state를 사용하고 싶은 경우
- <b>props 문법 사용하면 됨</b>
- ❗<b>props 문법 사용법 2step:</b>
    1. 자식컴포넌트 사용하는 곳에 가서 <code><자식컴포넌트 작명={state이름}></code>
    2. 자식컴포넌트 만드는 function으로 가서 props라는 파라미터 등록 후 props.작명 사용
- 무조건 부모 -> 자식으로만 전달 가능. 자식 -> 부모 / 자식 -> 자식 전달 불가능
- ❗<b>꼭 state만 전송할 수 있는 건 아님.</b> 일반 변수, 함수, 일반 문자전송 다 가능
</details>

<details>
<summary><b>🤔 Component 문법 옛날버전 : class</b></summary>

- 컴포넌트 만드는 옛날 문법으로 class가 있음
- 예시
```javascript
class Modal2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name : 'kim',
      age : 20
    }
  }
  render() {
    return (
      <div>안녕 {this.state.name} {this.state.age}
        <button onClick={()=>{
          this.setState({age : 21})
        }}>버튼</button>
      </div>
    )
  }
}
```
- 복잡하니까 그냥 function 쓰자
</details>

<details>
<summary><b>🤔 난 Bootstrap을 React에도 쓰고 싶어</b></summary>

- Bootstrap의 React 버전이 따로 있음
- Component들을 불러올 때 위에 import {} 문 작성해야 됨
</details>

<details>
<summary><b>🤔 이미지를 넣는 여러가지 방법</b></summary>

- React를 이용해 만든 앱에서 이미지를 넣는 방법은 여러 가지 있음
  1. CSS파일에서 넣기 : <code>url('./이미지경로');</code>
  2. HTML 안에서 이미지 넣기 : 이미지를 import 해오고 사용  
  <code>import 작명 from './이미지경로'</code>
  &lt;img&gt;태그 쓰고싶으면 <code>&lt;img src={작명}/&gt;</code>
  3. 이미지같은 static 파일의 경우 public 폴더에 보관해도 됨  
  해당 경우에는 <code>/이미지경로</code> 사용
</details>

<details>
<summary><b>🤔 public 폴더는 뭔가요?</b></summary>

- 리액트로 개발이 끝나면 build과정을 거치는데, 이때 src 안의 파일들은 전부 한 파일로 압축됨(bundling)
- 반면, public 폴더의 파일들은 그대로 보존함 -> static 파일 보관 가능
- 쉬운 접근 방법:
  ```html
  <img src='/이미지경로'/> 
  ```
- 권장 접근 방법:
  ```html
  <img src={process.env.PUBLIC_URL + '/이미지경로'} /> 
  ```
</details>

<details>
<summary><b>🤔 코드가 너무 길어서 따로 빼고 싶은데요</b></summary>

- ❗<b>import, export문 사용하면 됨!</b>
- 다른 js파일에 있는 변수나 함수를 가져와서 쓰고 싶다면
  1. 변수가 있는 js파일에서 <code>export default 변수명;</code> / <code>export {변수1, 변수2}</code>
  2. 그 변수를 가져올 js파일에서 <code>import 작명 from './파일경로'</code> / <code>import {변수1, 변수2} from './파일경로'</code>
</details>

<details>
<summary><b>🤔 다른 페이지로 옮겨보자</b></summary>

- 일반 html css js 사이트 : html 파일 여러 개 만들고 옮겨다님
- 리액트 : html 파일을 하나만 사용함 (index.html)  
  즉 html 파일 내부의 큰 div를 갈아 치우는 방식
- ❗<b>이 과정을 편하게 하려고 보통 react-router-dom 이라는 외부 라이브러리 설치해서 구현함</b>
- 
  <details>
  <summary><b>🤔 아래는 react-router-dom 사용법</b></summary>

  - 설치 : <code>npm install react-router-dom@6</code>
  - 사용하는 거 : <code>import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'</code>
    |이름|사용법|
    |---|---|
    |BrowserRouter|기본 세팅(index.js)|
    |Routes|큰 틀, 안에 Route를 담음|
    |Route|페이지 하나를 담음, url경로랑 보여줄 컴포넌트를 인자로 받음|
    |Link|클릭 시 다른 페이지랑 연결, 해당 페이지의 url경로를 인자로 받음|
  - 라이브러리니까 자세한 사용법은 인터넷 살펴보자
  </details>
</details>
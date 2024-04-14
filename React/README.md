[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://github.com/MinSungJe/FrontEnd_Prac)
# 📝 React 연습장
## 🗒️Last Update : 2024-04-14
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
- 난 props 쓰기 귀찮은데요 -> props라는 파라미터 등록하는 대신 {작명}을 넣으면 바로 사용가능
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
    |useNavigate|useNavigate() 사용 시 다른 페이지로 이동시키는 함수가 남음, 해당 페이지의 url경로나 숫자(앞으로가기)를 인자로 받음|
    |Outlet|NestedRoute의 구멍 역할|
  - 라이브러리니까 자세한 사용법은 인터넷 살펴보자
  </details>
</details>

<details>
<summary><b>🤔 404 페이지는 어떻게 만드나요?</b></summary>

- Route의 path='*'로 받으면 이미 설정한 경로 이외의 다른 모든 경로를 지정함
</details>

<details>
<summary><b>🤔 서브경로는 어떻게 만들죠?</b></summary>

- Nested Routes를 이용한다.
- 간단하게 Route안에 Route를 넣어서 구현하면 됨
- 큰 Route의 Component 내에 Outlet(구멍)을 넣어놔서 작은 Component가 들어갈 자리를 만들어둘 수 있음
</details>

<details>
<summary><b>🤔 비슷한 페이지를 여러 개 만들고 싶어요</b></summary>

- url 파라미터를 이용한다
- Route나 Link 등으로 연결할 url의 뒤에 <code>:작명</code>을 넣는다
- useParams() 훅을 하위 페이지에서 사용하면 넣은 파라미터를 가져올 수 있다
- 이때 작명한 변수 이름은 url 파라미터 지정 시 사용한 작명과 같게 한다.
</details>

<details>
<summary><b>🤔 CSS파일이 없는데 어떻게 스타일을 입힌거야</b></summary>

- <b>styled-components 라이브러리</b>를 이용하면 됨
- 해당 라이브러리를 이용하면..
  1. CSS 파일 오픈할 필요없이 JS파일에서 바로 스타일을 넣을 수 있음
  2. 여기 적은 스타일이 다른 JS파일로 오염되지 않음(원래 CSS는 서로간 오염될 수 있음 -> 참고로 <code>컴포넌트명.module.css</code>로 CSS를 작명하면 오염되지 않게 가능)
  3. 페이지 로딩시간이 단축됨 : 이렇게 적은 스타일은 style태그로 바로 넣어주기 때문
- 비슷한 UI를 만들기 위해 여기에도 ${props=>props.작명}을 이용한 props문법이 가능함
</details>

<details>
<summary><b>🤔 useEffect 왜써요</b></summary>

- useEffect() 훅: 생명주기 중 mount와 Update 시기에 코드 실행 가능
- 근데 그냥 안쓰고 넣어도 실행 가능 하던데? -> ❗<b>useEffect 안의 코드는 html 렌더링 이후에 실행됨</b>
- 그래서 어따 씀? -> side effect 기능들: 오래걸리는 반복연산, 서버에서 데이터가져오는 작업, 타이머다는거를 여따가 넣자
- <code>useEffect(()=>{},[])</code>에서 [] 안에 있는 변수가 Update 될때만 실행하도록 설정 가능, 비워놓으면 Update없이 mount시에만 실행함
- ()=>{}안에 return ()=>{} 넣어두면 useEffect 실행 전에 먼저 실행할 코드를 입력 가능, 또 여기 코드는 unmount 시에도 한번 실행함
</details>

<details>
<summary><b>🤔 리액트에서 서버를 써보자</b></summary>

- 서버란? 유저가 데이터달라고 요청하면 데이터보내주는 프로그램일 뿐임
- 근데 요청할때 양식맞춰서 정중히 요청해야함
  1. 어떤 데이터인지(URL 형식으로)
  2. 어느 방법으로 요청할지(GET or POST)
- 근데 이거 그냥 요청하면 브라우저가 새로고침됨 -> ❗<b>새로고침없이 간단하게 데이터 주고받을 수 있게 도와주는 브라우저 기능 : ajax!</b>
- ajax로 GET/POST 요청하려면 방법 3개 중 택1하면 됨
  1. XMLHttpRequest라는 옛날 문법 쓰기
  2. fetch()라는 최신 문법 쓰기
  3. axios 같은 외부 라이브러리 쓰기
- 원래 서버랑은 문자자료만 주고받을 수 있지만 array 자료 받기 위해 JSON이라는 문자취급받는 자료를 써먹음
- ❗<b>그래서 axios가 아니라 쌩자바스크립트문법인 <code>fetch()</code>를 써먹으려면 JSON -> object/array로 바꾸는 작업이 필요함!!</b>  
  <code>fetch('URL').then(결과 => 결과.json()).then((결과) => { console.log(결과) } )</code>
</details>

<details>
<summary><b>🤔 axios 써서 ajax 써먹어보고 싶은데요</b></summary>

- 먼저 외부라이브러리이므로 설치부터 하자 <code>npm install axios</code>
- 상단에서 import해오고 <code>axios.get('URL')</code>하면 그 URL로 GET요청함
- 데이터 가져온 결과를 보고싶다면 뒤에 <code>.then((작명)=>{작명이용 코드~~})</code> 붙인다
- 뒤에 <code>.catch(()=>{})</code> 붙이면 요청 실패시 코드를 작성할 수 있음
- <code>axios.post('URL', {name:'min'})</code>하면 그 URL로 POST요청함  
  완료 시 특정 코드를 실행하고 싶으면 뒤에 <code>.then()</code>을 붙임
- 동시에 ajax 요청 여러 개 날리려면 <code>Promise.all([axios.get('URL1'), axios.get('URL2')])</code>  
  역시 완료 시 특정 코드를 실행하고 싶으면 뒤에 <code>.then()</code>을 붙임
</details>

<details>
<summary><b>🤔 컴포넌트를 보여줄 때 조건문을 사용하고 싶어요</b></summary>

- html 내부에서 구현: 삼항연산자(?:)이용
- 삼항연산자말고 if 쓰고 싶은데요: App() 외부에서 컴포넌트를 하나 구현하고 써먹자
</details>

<details>
<summary><b>🤔 전환 애니메이션 멋드러지게 만들고 싶어요</b></summary>

- 애니메이션 만드는 4 step
  1. 애니메이션 동작 전 스타일을 담을 className 만들기
  2. 애니메이션 동작 후 스타일을 담을 className 만들기
  3. transition 속성 추가
  4. 원할 때 2번 탈부착
- ❗<b>리액트에선 클래스 뗐다 붙였다 할때 state를 이용할 수 있음!</b>
  ```javascript
  let [fade, setFade] = useState('')

  useEffect(()=>{
    let a = setTimeout(()=>{setFade('end')}, 100)
    return (()=>{
      clearTimeout(a)
      setFade('')})
  }, [])

  <div className={"start "+ fade}>
  </div>
  ```
- setTimeout은 왜쓴건데요: 리액트 18버전 이후부터 생긴 automatic batch라는 기능 때문  
  이 때문에 state 변경함수들이 연달아서 여러개 처리되어야한다면 마지막 한번에 다같이 재렌더링됨 -> setTimeout으로 시간차이 설정해줘야함
</details>

<summary><b>🤔 컴포넌트 사이에 state를 props로 공유하기 힘들어요</b></summary>

- props 문법은 부모 -> 자식으로만 전달되기 때문에 자식의 자식 컴포넌트에 state를 전달하려면 여러번 작성해야 됨
- 그게 번거로울 수 있잖아요? 2가지 방법으로 해결가능
  1. Context API 문법 사용
  2. Redux 같은 외부 라이브러리 사용
- <b>❗Context API는 여러 단점이 있어 보통 외부 라이브러리를 많이들 사용함</b>
  1. state 변경 시 쓸데없는 컴포넌트까지 전부 재렌더링됨
  2. useContext()를 쓰고 있는 컴포넌트는 나중에 다른 파일에서 재사용할 때 Context를 import하는게 귀찮아질 수 있음
</details>
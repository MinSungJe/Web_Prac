[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://github.com/MinSungJe/FrontEnd_Prac)
# 📝 React 연습장
## 🗒️Last Update : 2024-04-29
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

<details>
<summary><b>🤔 컴포넌트 사이에 state를 props로 공유하기 힘들어요</b></summary>

- props 문법은 부모 -> 자식으로만 전달되기 때문에 자식의 자식 컴포넌트에 state를 전달하려면 여러번 작성해야 됨
- 그게 번거로울 수 있잖아요? 2가지 방법으로 해결가능
  1. Context API 문법 사용
  2. Redux 같은 외부 라이브러리 사용
- <b>❗Context API는 여러 단점이 있어 보통 외부 라이브러리를 많이들 사용함</b>
  1. state 변경 시 쓸데없는 컴포넌트까지 전부 재렌더링됨
  2. useContext()를 쓰고 있는 컴포넌트는 나중에 다른 파일에서 재사용할 때 Context를 import하는게 귀찮아질 수 있음
</details>

<details>
<summary><b>🤔 Redux를 왜 쓰는 거에요</b></summary>

- <b>❗컴포넌트 간 State 공유가 편리하기 때문!</b>
- 그럼 Redux만 쓰면 되는거 아니에요? : 공유할 필요없는 State는 사용할 필요 없음
- 또 간단한거 만들 때 컴포넌트가 몇개 없을 때 이럴 땐 그냥 props 쓰는게 더 코드가 짧아짐

</details>

<details>
<summary><b>🤔 Redux 세팅법</b></summary>

- 천천히 Step 따라와보세요
  - 터미널에 <code>npm install @reduxjs/toolkit@1.8.1 react-redux </code> (Redux 설치) -> 이때 react, react-dom 항목의 버전이 18.1.x 이상이어야 함
  - 아무데나 store.js 파일 만들고 이 코드 복붙: state 보관하는 파일임
    ```javascript
    import { configureStore } from '@reduxjs/toolkit'

    export default configureStore({
      reducer: { }
    }) 
    ```
  -  index.js 파일가서 Provider 라는 컴포넌트와 아까 작성한 파일을 import하고 밑에 &lt;App/&gt;을 &lt;Provider store={import해온거}&gt;로 감싸면 설정 완료  
      ```javascript
      import { Provider } from "react-redux";
      import store from './store.js'
      ...
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
      ...
      ```
</details>

<details>
<summary><b>🤔 이제 Redux로 State 써봅시다</b></summary>

- State 등록법 : 만들어준 store.js 가서
  ```javascript
  import { configureStore, createSlice } from '@reduxjs/toolkit'

  let user = createSlice({
      name : 'user',
      initialState : 'kim'
  })

  export default configureStore({
      reducer: {
          user : user.reducer
      }
  })
  ```
- 등록한 State 사용법 : 사용할 js로 가서
  ```javascript
  import { useSelector } from 'react-redux'
  ...
  function Cart() {

    let state = useSelector((state)=> state.user)

    return (
      ...
  )}
  ```

- 등록한 State 변경법 3 step
  - store.js 안에 state 수정해주는 함수를 만듦
    ```javascript
    let user = createSlice({
      name : 'user',
      initialState : 'kim',
      reducers : {
        changeName(state){
          return 'john ' + state
        }
      }
    }) 
    ```
  - 다른 곳에서 쓰기 좋게 export 해둠
    ```javascript
    export let { changeName } = user.actions 
    ```
  - 원할 때 import 해서 사용하는데 dispatch()로 감싸서 써야함
    ```javascript
    (Cart.js)

    import { useDispatch, useSelector } from "react-redux"
    import { changeName } from "./../store.js"

    ...
    let dispatch = useDispatch();
    ...

    <button onClick={()=>{
      dispatch(changeName())
    }}>버튼임</button> 
    ```
    dispatch()는 메시지 또는 요청을 보낸다는 뜻임!
</details>

<details>
<summary><b>🤔 새로고침을 했는데 내 state데이터가 초기화돼요</b></summary>

- 새로고침하면 모든 state 데이터는 리셋됨(html css js파일을 다시 읽기 때문)
- 리셋 안시킬거면 서버로 보내서 DB로 저장하거나 localStorage를 쓰면 됨
- localStorage 문법
  ```javascript
  localStorage.setItem('데이터이름', '데이터');
  localStorage.getItem('데이터이름');
  localStorage.removeItem('데이터이름')
  ```
- localStorage에는 문자만 저장할 수 있음 -> 근데 난 array/object 자료형 넣고싶은데요
- 편법 : <b>array/object -> JSON</b>으로 변환해서 저장
- JSON 변환 문법
  ```javascript
  JSON.stringify(array/object) // array/object -> JSON
  JSON.parse() // JSON -> array/object
  ```
</details>

<details>
<summary><b>🤔 react-query는 왜 쓰는거람</b></summary>

- 장점1. ajax 요청 성공/실패/로딩중 상태를 쉽게 파악 가능
  - <code>result.isLoading</code>, <code>result.error</code>, <code>result.data</code> 등..
- 장점2. 틈만나면 알아서 ajax 재요청해줌
- 장점3. 실패 시 재시도 알아서 해줌(4번인가 5번 정도?)
- 장점4. ajax로 가져온 결과는 state 공유 필요없음
  - ajax로 가져온게 자식컴포넌트에도 필요한 정보라면 원래는 props 문법써서 전달해야하지만 그냥 그 자식컴포넌트에서도 똑같이 ajax 요청하는 코드 또 적으면 됨
  - react-query는 똑똑해서 ajax 요청이 2개나 있으면 1개만 날리고 캐싱기능도 있어서 이미 같은거 한 적 있으면 그걸 우선 가져와서 씀
- 사실 비슷한 라이브러리 더 있긴함 (RTK Query라던가..)
- 설치하고 사용하는 법은 공식 문서 참고
</details>

<details>
<summary><b>🤔 lazy import</b></summary>

- 리액트로 만드는 Single Page Application의 특징 -> 다만들고 빌드하면 html, js 파일이 하나만 생성됨
- 그 안에 지금까지 만든 내용이 전부 들어 있어 파일 사이즈가 좀 큼 -> 첫 페이지 로딩 속도가 매우 느릴 수 있음
- 그게 싫다면 js 파일을 쪼개면 됨 -> import 문법을 lazy import해서 사용
- 메인 페이지에서 바로 보일 필요 없는 컴포넌트를 lazy import
  ```javascript
  (App.js)
  import {lazy} from 'react'

  const Detail = lazy( () => import('./routes/Detail.js') )
  const Cart = lazy( () => import('./routes/Cart.js') )
  ```
- lazy 사용하면 당연히 컴포넌트 로드까지 지연시간 발생할 수 있을텐데 그럴때는
  1. Suspense 라는 거 import 해오고
  2. lazy import한 컴포넌트를 감싸면 로딩중일때 대신 보여줄 html 작성도 가능
  ```javascript
  import {Suspense} from 'react'
  ...
    <Suspense fallback={ <div>로딩중</div> }>
      <Detail shoes={shoes} />
    </Suspense>
  ```
- 아니면 Routes 전체를 감싸도 됨
</details>

<details>
<summary><b>🤔 (참고) Memo, useMemo</b></summary>

- Memo 언제 써요?
  - 자식 컴포넌트 중 랜더링 시간이 오래걸리는 자식 컴포넌트가 있음
  - 부모 컴포넌트의 state가 변화될때마다 자식도 새로 불러오면서 랜더링 시간을 또 잡아먹을 때
- 사용법 <code>let 컴포넌트명 = function() {시간 오래 걸리는거}</code> 이런식으로 컴포넌트를 생성하고 함수를 <code>memo()</code>로 감싸자(react에서 import)
- 이러면 자식 컴포넌트로 전달되는 props의 값이 바뀔때만 자식이 새로 랜더링됨
  - 따라서 자식에게 전달되는 props가 복잡한 경우, 기존 props랑 달라진 점이 있는지 확인하기 위해 시간이 오히려 더 오래 걸림
  - 이런 경우에는 안쓰는게 더 좋음
- useMemo는 useEffect와 비슷한 용도임
  - 차이점은 실행 시점의 차이(useEffect는 모든 랜더링이 끝나고, useMemo는 랜더링 중에)
</details>

<details>
<summary><b>🤔 (참고) 리액트 18버전부터 사용가능한 혁신적 기능 소개</b></summary>

- 리액트 18버전 이후부터 추가된 기능들 몇 가지 소개드림
  - 일관된 batcing : state변경함수를 여러개 쓰면 재랜더링은 마지막 1번만 됨 - 이거 싫으면 flushSync 사용
  - useTransition 추가됨
    ```javascript
    let [isPending, startTransition] = useTransition()
    ```
    - isPending : 처리중일때 True를 뱉는 변수
    - startTransition : 이걸로 렌더링이 느린 컴포넌트를 감싸면 그걸 다른 코드들보다 나중에 처리해줌
  - useDeferredValue 추가됨
    - 위에 useTransition이랑 비슷함
    ``` javascript
    let state1 = useDeferredValue(name)
    ```
    - state 아니면 변수 하나를 집어넣을 수 있음
    - 그 변수에 변동사항이 생기면 그걸 늦게 처리해줌
</details>

<details>
<summary><b>🤔 (참고) PWA???</b></summary>

- 웹서비스 바로가기인데 앱처럼 생겨먹음
- 장점:
  - 스마트폰, 태블릿 바탕화면에 웹사이트 설치 가능
  - 오프라인에서도 동작 가능
  - 설치 유도 비용이 매우 적음
- ❗<b>만드는 법</b>: 프로젝트를 생성할 때 <code>npx create-react-app 프로젝트명 --template cra-template-pwa</code>
- 원래 있던 프로젝트로 PWA 만드려면 위 방법대로 만들고 세부 파일/라이브러리를 복붙 및 설치하면 됨
</details>
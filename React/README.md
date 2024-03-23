[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://github.com/MinSungJe/FrontEnd_Prac)
# 📝 React 연습장
## 🗒️Last Update : 2024-03-23
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

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://github.com/MinSungJe/FrontEnd_Prac)
# 📝 React 연습장
## 🗒️Last Update : 2024-03-21
<details>
<summary><b>🤔 React Project 생성법</b></summary>

- <code>npx create-react-app [project 이름]</code>
- 미리보기 : <code>npm start</code>
</details>

<details>
<summary><b>🤔 State 왜 씀?</b></summary>

- 실시간으로 변경되는 값을 사용하기 위해 사용
- <code>setState(실제 변경값, 변경함수)</code>
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

- ❗3 step
    1. html css로 미리 UI 디자인을 다 해놓고
    2. UI의 현재 상태를 state로 저장해두고 (보이기 여부 : true, false 등)
    3. state에 따라서 UI가 어떻게 보일지 조건문 등으로 작성
- 참고. html 내 조건문 사용하려면 삼항연산자 활용
</details>

<details>
<summary><b>🤔 html 내에서 반복문 쓰기(map())</b></summary>

- ❗map함수 사용법 : <code>[list].map(function(){})</code>
- function 파라미터를 지정하면 list의 인자를 넘겨줌
- function으로 특정 값을 return하면 return된 값으로 리스트를 새로 만들어줌
- return을 안해서 반복문으로 활용도 가능
- 굳이 for 쓰고 싶다면 js부분(html 바깥)에서 사용하면 됨
</details>

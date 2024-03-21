[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://github.com/MinSungJe/FrontEnd_Prac)
# 📝 JavaScript 연습장
## 🗒️Last Update : 2024-03-21
<details>
<summary><b>🤔 JavaScript 기본적인 활용법</b></summary>

1. 셀렉터로 바꾸고자 하는거 특정
2. 특정된 거 어떻게 바꿔달라고 조르기
- ex) <code>document.getElementById('alert').style.display = 'none';</code>
</details>

<details>
<summary><b>🤔 UI 만드는 법?</b></summary>

1. html css로 미리 디자인하고
2. 버튼 누르면 보여주기
</details>

<details>
<summary><b>🤔 EventListener가 뭐임</b></summary>

- 버튼 태그를 클릭할 때 작동시키는 법은 현재까지 두 가지임
    - onClick 이벤트 넣고 실행할 함수이름 같이 주기  
    <code>onclick = "함수이름()"</code>
    - 버튼에 id 주고 EventListener 추가하기  
    <code>document.getElementById('ID이름').addEventListener("click", 함수이름);</code>
- addEventListener에 들어가는 첫 번째 인자는 event의 종류가 들어감  
ex) click, mouseover, keydown ...
- 근데 왜 씀? : <code>onclick = "함수이름()"</code> 요거 대체용임
</details>

<details>
<summary><b>🤔 창작의 고통을 줄여주는 Bootstrap</b></summary>

- 맨날 HTML, CSS 짜서 디자인하기 힘드니 [Bootstrap](https://getbootstrap.com/)에서 가져오자
- 특정 코드를 HTML 내에 넣어서 라이브러리 설치 후 사용
</details>

<details>
<summary><b>🤔 보여주는 두 번째 방법: class 뗐다 붙이기</b></summary>

- 첫 번째 방법: class 내 display 속성을 none/block으로 바꾸기
- 두 번째 방법: 보여주는 class(display="block")를 뗐다 붙였다 하기
- 사용법 : <code>셀렉터.classList.toggle("클래스명");</code>
- ❗<b>주의사항 : 적용 순서는 html 내 순서가 아니라 css 정의 순서임!</b>
- 왜 씀? : 다른 스타일도 동시에 주고 싶을 경우 유용함
</details>

<details>
<summary><b>🤔 편리한 셀렉터: querySelector</b></summary>

- <code>document.querySelector("CSS 선택 문법")</code>
- #id, .class 등 CSS에서 사용하듯이 선택 가능
- querySelector()는 맨 상단 1개만 선택, querySelectorAll()으로 모든 경우 선택 가능, 인덱싱으로 하나 선택
</details>

<details>
<summary><b>🤔 더 편리한 셀렉터가 들어있는 라이브러리: JQuery</b></summary>

- 자바스크립트를 더 짧고 편리하게 쓸 수 있게 해주는 라이브러리임
- querySelector를 <code>$</code> 한단어로 축약해줌  
<code>document.querySelector("CSS 선택 문법")</code> -> <code>$</code>
- 이 외에도 JQuery식 축약문법이 다양하게 존재함  
ex) addEventListner() -> on() ...
- ❗<b>JQuery 셀렉터 뒤에는 JQuery 문법만, 기존 JS 셀렉터 뒤에는 기존 문법만 사용 가능!</b>
</details>

<details>
<summary><b>🤔 one-way UI 애니메이션 만드는 법?</b></summary>

- one-way 일방향 애니메이션 만드는 4 step  
    1. class로 시작스타일 만들고
    2. class로 최종스타일 만들고
    3. 원할 때 최종스타일로 변하라고 JS 코드 짜기
    4. 시작스타일에 transition 추가
</details>


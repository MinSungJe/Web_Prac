![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
# 📝 JavaScript 연습장
## 🗒️Last Update : 2024-03-20
<details>
<summary><b>🤔 JavaScript 기본적인 활용법</b></summary>

1. 셀렉터로 바꾸고자 하는거 특정
2. 특정된 거 어떻게 바꿔달라고 조르기
- ex) <code>document.getElementById('alert').style.display = 'none';</code>
</details>

<details>
<summary><b>🤔 EventListener가 뭐임</b></summary>

- 버튼 태그를 클릭할 때 작동시키는 법은 현재까지 두 가지임
    - onClick 이벤트 넣고 실행할 함수이름 같이 주기  
    <code>onclick = "함수이름()"</code>
    - 버튼에 id 주고 EventListener 추가하기  
    <code>document.getElementById('ID이름').addEventListener("click", 함수이름);</code>
- addEventListener에 들어가는 첫 번째 인자는 event의 종류가 들어감.  
ex) click, movseover, keydown .. 
- 근데 왜 씀? : <code>onclick = "함수이름()"</code> 요거 대체용임.
</details>
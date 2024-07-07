[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://github.com/MinSungJe/FrontEnd_Prac)
# 📝 JavaScript 연습장
## 🗒️Last Update : 2024-07-06
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
- jQuery 셀렉터로 여러 요소 찾은 뒤 하나만 고르려면 <code>.eq(인덱스)</code> 사용하면 된다
</details>

<details>
<summary><b>🤔 one-way UI 애니메이션 만드는 법?</b></summary>

- one-way 일방향 애니메이션 만드는 4 step  
    1. class로 시작스타일 만들고
    2. class로 최종스타일 만들고
    3. 원할 때 최종스타일로 변하라고 JS 코드 짜기
    4. 시작스타일에 transition 추가
</details>

<details>
<summary><b>🤔 var, let, const의 차이</b></summary>

- var
    - 재선언, 재할당 가능
    - 범위: function
- let
    - 재선언 불가
    - 범위: {}
- const
    - 재선언 불가
    - 재할당 불가
    - 범위: {}
</details>

<details>
<summary><b>🤔 일정 시간이 지나면 코드를 실행시키고 싶어</b></summary>

- <code>setTimeout(콜백함수, 시간(ms))</code> : 시간 뒤에 콜백함수 실행
- <code>setInterval(콜백함수, 시간(ms))</code> : 시간마다 콜백함수 실행
- 콜백함수 : 함수의 파라미터 자리에 들어가는 함수, ()=>{} 함수 혹은 함수명이 들어갈 수 있음
</details>

<details>
<summary><b>🤔 제출된 값 안에 특정값이 있는지 확인해보고싶어요</b></summary>

- ❗<b>정규식을 사용해보자</b>
- 사용법 : 아래와 같이 입력하면 boolean값이 튀어나옴
    ```javascript
    /정규식/.test('확인할거')
    ```
</details>

<details>
<summary><b>🤔 캐러셀이 뭔데요</b></summary>

- 버튼 누르면 옆으로 샥 넘어가는 UI
- one-way UI 만들듯이 만들면 됨
- 가로로 긴 이미지를 미리 만들어두고 옆으로 샥 움직여서 구현(style 중 transform 이용)
- 움직일때에는 언제나 transition 스타일 추가해두자
</details>

<details>
<summary><b>🤔 Scroll과 관련된 이벤트 다루기</b></summary>

- 이벤트 : scroll
- 얼마나 스크롤했는지 알려줘 : <code>window.scrollY</code> / <code>$(window).scrollTop()</code>
- 스크롤을 강제이동해줘 : <code>window.scrollTo(0, 100)</code> / <code>$(window).scrollTop(100)</code>
- 현재 위치에서부터 스크롤해줘 : <code>window.scrollBy(0, 100)</code>
- div 박스를 얼마나 스크롤했는지 알려줘 : <code>셀렉터.scrollTop</code>
- div 박스 실제 높이 구하고 싶어 : <code>셀렉터.scrollHeight</code>
</details>

<details>
<summary><b>🤔 자바스크립트가 너무 길어서 html 보기 힘든데..</b></summary>

- 모듈화해서 따로 빼두자
- 작업폴더에 어쩌구.js로 빼둔 다음 그 코드가 필요한 html 파일에서 밑에꺼 쓰면 그대로 붙인거랑 다름없음  
    ```html
    <script src="어쩌구.js"></script>
    ```
</details>

<details>
<summary><b>🤔 비슷한 코드를 여러 번 적는게 불편해요</b></summary>

- 반복문 씁시다 : for문
- ❗<b>주의사항: i 선언할때 var로 선언하면 안되고, let으로 선언해야함!</b>
    ```javascript
    for (let i=0; i<반복횟수; i++) {
        반복할 코드~~
    }
    ```
- 이유는 변수의 범위 때문, var는 for문 바깥에 포스트잇 생성 / let은 for문 안쪽에 포스트잇 생성
</details>

<details>
<summary><b>🤔 난 이거 안눌렀는데 작동돼요</b></summary>

- ❗<b>이벤트 버블링 현상 때문</b>
- 그게 뭔데요: 하위요소에서 이벤트가 발생하면 그 이벤트가 상위요소로까지 전달되는 현상
- 막으려면 이벤트 관련 유용한 함수들을 이용해 이벤트 버블링을 막으면 됨
</details>

<details>
<summary><b>🤔 이벤트 관련 유용한 함수를 소개합니다</b></summary>

- ❗<b>이벤트 리스너 콜백 함수 안에 e라는 인자를 주면 여러 유용한 함수 사용가능</b>
- e.target : 실제 클릭한 요소 알려줌
- e.currentTarget : 지금 이벤트리스너가 달린 곳 알려줌
    this랑 키워드가 같은데 arrow function을 쓸때는 다름 / function(){}으로 선언시 같음
- e.preventDefault() : 이벤트 기본 동작(submit 같은거)을 막아줌
- e.stopPropagation() : 내 상위요소로의 이벤트 버블링을 중단해줌
</details>

<details>
<summary><b>🤔 사실 html안에 개발자가 정보 숨겨둘 수 있는거 아세요</b></summary>

- ❗<b>dataset 문법을 소개합니다.</b>
- html 안에 한번 이거 넣어보세요
    ```html
    <div data-데이터이름="값"></div> 
    ```
- 이 정보를 뽑아내려면 다음과 같이 쓰시면 됩니다.
    ```javascript
    document.querySelector().dataset.데이터이름;
    ```
- 이런 기술을 알고 있다면 이벤트리스너 적게 사용할 때 내가 뭐 눌렀는지 쉽게 파악이 가능하답니다.
- 참고: 이벤트리스너 줄이면 램 사용 줄이는 이점이 있음
</details>

<details>
<summary><b>🤔 Array랑 Object를 소개합니다</b></summary>

- 여러 가지 변수들을 하나의 변수로 뭉쳐주는 그릇에는 Array랑 Object가 있음
- Array : [], 인덱스로 자료 탐색, 정렬이나 슬라이싱 가능,리스트
- Object : {}, key값으로 자료 탐색, key:value 자료형으로 저장, 딕셔너리
</details>

<details>
<summary><b>🤔 서버랑 통신하고 싶어요</b></summary>

- 서버는 유저가 데이터 달라고 요청을 하면 데이터를 보내주는 간단한 프로그램
- ❗<b>근데 그냥 달라고 요청하면 안되고 양식에 맞춰 정중하게 부탁해야함</b>
    1. 어떤 데이터인지 url로 잘 기재하고
    2. 어떤 방법으로 요청할 지 결정해야함 (GET/POST 등..)
- GET요청은 서버에 있던 데이터를 읽고싶을때 주로 사용하고(주소창) POST요청은 서버로 데이터를 보내고 싶을 때 사용함
- 근데 그냥 요청날리면 브라우저가 새로고침됨 -> ❗<b>새로고침 없이 데이터를 주고받을 수 있게 도와주는 간단한 브라우저 기능이 ajax임!</b>
</details>

<details>
<summary><b>🤔 ajax 써보고 싶은데요</b></summary>

- 왜 써요? : ❗<b>새로고침없이 서버요청을 통해 데이터를 주고받을 수 있음</b>
- jQuery로 ajax 요청하기
    1. GET
        ```javascript
        $.get('url~~~~')
        .done(function(data){
            console.log(data)
        })
        .fail(function(error){
            console.log('실패함')
        });
        ```
        - done, fail 대신 then, catch 넣어도 됨
    2. POST
        ```javascript
        $.post('url~~', {name : 'Min'})
        ```
- 쌩자바스크립트로 ajax 요청하기(fetch)
    ```javascript
    fetch('url~~~~')
    .then(res => res.json())
    .then(function(data){
        console.log(data)
    })
    .catch(function(error){
        console.log('실패함')
    });
    ```
    - 요렇게 쓰는 이유는 json자료(문자로 인식됨)을 array/object 형으로 바꾸어야 하기 때문
    위에서는 왜 건너뛰었냐면 제이쿼리는 그냥 자동으로 json을 array/object 형으로 바꿔주기 때문
- 외부 라이브러리 설치(axios 등)
</details>

<details>
<summary><b>🤔 자바스크립트의 Array.sort()는 어떨까?</b></summary>

- sort()는 Array의 값들을 정렬할 때 사용, map()과 filter()와 달리 Array를 변형시킴
- 그냥 sort()쓰면 문자열 오름차순으로 작동
- sort 안에는 콜백함수를 넣을 수 있음
- 콜백함수 작동원리는 다음과 같음
    ```javascript
    Array.sort((a, b) => return {양수/음수})
    ```
    - a와 b에는 Array안의 값 두 개씩 꺼내서 모든 경우를 비교함
    - 만약 return 다음 값이 양수면 a가 오른쪽으로 감
    - 만약 return 다음 값이 음수면 b가 오른쪽으로 감
    - 0이면 아마 그대로 있을듯?
- 이 작동원리를 이용해 내림차순이나 숫자간의 정렬도 구현 가능
</details>

<details>
<summary><b>🤔 DOM이란?</b></summary>

- 생각해보면.. javascript가 어떻게 html의 요소를 접근하고 바꿀 수 있는걸까?
- html의 태그로 만든 요소를 javascript가 읽기 편한 object 자료형으로 바꾸면 읽을 수 있지 않을까?
- 그래서 ❗<b>실제로 브라우저는 html을 열 때 자바스크립트가 해석할 수 있는 object와 비슷한 자료형에 담아줌</b>
- ❗<b>이렇게 저장한 자료형을 Document Object Model, 즉 DOM이라 부름</b>
- 브라우저는 html 문서를 위에서부터 읽으면 DOM을 생성함 -> 따라서 스크립트의 순서와 태그의 순서를 맞추는 것이 중요함
- DOMContentLoaded 이벤트 리스너를 이용해 실행을 나중에 하는 방법도 있음
</details>

<details>
<summary><b>🤔 마우스 입력 이벤트 리스너 정리</b></summary>

- mousedown : 마우스를 눌렀을 때
- mouseup : 마우스를 눌렀다 뗄 때
- click : mousedown과 mouseup을 껄라버레이션
- mousemove : 마우스가 안에서 움직일 때
</details>

<details>
<summary><b>🤔 터치 입력 이벤트 리스너 정리</b></summary>

- touch는 모바일 환경에서의 터치를 의미함
- touchstart : 마우스를 눌렀을 때
- touchend : 마우스를 눌렀다 뗄 때
- touchmove : 마우스가 안에서 움직일 때
- 주의 사항: <code>e.clientX -> e.touches[0].clientX</code>
- touchend 이벤트 리스너에서는: <code>e.clientX -> e.changedTouches[0].clientX</code>
- 터치는 하나 이상이 될 수 있기 때문에 index를 붙여줘야함
</details>

<details>
<summary><b>🤔 this 키워드를 알아봅시다</b></summary>

- this 키워드는 4가지 경우가 있음
    1. 그냥 쓰거나 일반 함수(콜백함수로 사용한 경우 등) 안에서 쓰면 {window} (기본 함수들 수납공간)
        - strict mode + 일반함수 내에서 쓰면 undefined
    2. ❗<b>오브젝트 내 함수안에서 쓰면 그 함수를 가지고 있는 오브젝트를 뜻함</b>
        - 1번이 window인 이유는 함수나 변수를 전역공간에서 만들면 {window}에 보관하기 때문!
    3. constructor 안에서 쓰면 새로 생성되는 오브젝트(=instance)를 뜻함
    4. 이벤트리스너 안에서는 e.currentTarget과 같음
        - 지금 이벤트가 동작하고 있는 html요소
- 특수 경우
    - 콜백함수는 그냥 일반함수랑 취급이 같음
    - 신문법 Arrow Function 특징
        - this 값을 함수 밖에 있던거 그대로 씀
        - 내부의 this값을 변화시키지 않음(외부 this값 그대로 재사용 가능)
</details>

<details>
<summary><b>🤔 함수 만들 때 function 키워드 대신 =></b></summary>

- function 키워드 대신 ES6 Arrow function(=>)을 이용해서 함수를 만들 수 있음
- 함수를 만드는 이유
    1. 코드들을 기능으로 묶고 싶을 때 사용
    2. 입출력 기계를 만들고 싶을 때 사용
- Arrow function 장점
    1. 입출력 기계 만들 때 보기쉬움
    2. 파라미터가 1개면 소괄호 생략 가능
    3. 코드 한줄이면 중괄호도 생략 가능
- Arrow function 특징
    - 바깥에 있던 this 값을 내부에서 그대로 사용
</details>

<details>
<summary><b>🤔 변수에 대해 몇 가지 알려드림</b></summary>

- 변수는 Hoisting 현상이 있음
    - 변수의 선언을 변수 범위 맨 위로 끌고 오는 현상
    - 변수를 만나면 선언 부분을 강제로 맨 위로 끌어올림
    - (참고) 함수선언도 Hoisting 현상이 일어남
- 전역변수: 모든 곳에서 쓸 수 있는 변수
    - 바깥에 있는 변수는 함수 안에서 그대로 쓸 수 있음
    - window로 전역변수를 만들 수 있음
        - window는 자바스크립트의 기본함수를 보관하는 큰 오브젝트임
        - <code>window.이름 = '김';</code>
</details>

<details>
<summary><b>🤔 backquote 문자열 알려드림</b></summary>

- backquote 문자열이란?: 문자열 선언할때 따옴표(', ") 대신 백틱(`) 사용
- backquote 문자열의 장점
    1. 엔터키 가능
        ```js
        var 변수 = `이렇게
        해도 인식되지롱`;
        ```
    2. 중간중간 변수넣기 쉬움(+기호 써서 합칠 필요 없음)
    ```js
    var 이름 = '민성제';
    var 문자 = `안녕하세요 저는 ${이름}이에요`
    ```
- tagged literal: `문자`를 해체분석할 수 있음
    - 단어 순서를 변경하거나, 단어를 제거하거나, ${변수} 위치를 옮길 수 있음
    - 방법: 해체분석용 함수를 만든 뒤에 파라미터 넣기
        - 파라미터1: ${} 양옆 문자들을 Array화 해줌
        - 파라미터2: ${변수}를 뜻함
        - 파라미터3..: 두번째.. ${변수}를 뜻함
        ```js
        var 변수 = '민성제'
        var 문자 = `안녕하세요 ${변수}입니다.`

        function 해체분석기(문자들,변수1) {
            console.log(문자들)
            console.log(변수들)
        }

        해체분석기`안녕하세요 ${변수}입니다.`
        ```
</details>

<details>
<summary><b>🤔 ... spread operator</b></summary>

- ...: spread operator, 괄호 안에서만 사용 가능한 문법
    1. Array/Object에 붙이면 괄호를 제거함
    2. 문자에 붙이면 문자를 펼쳐줌

- 활용법: 
    1. Array, Object를 합치거나 복사(reference data type의 deepcopy)할 때 사용 가능
    ```js
    var a1 = [1, 2]
    var a2 = [3, 4]
    var a3 = [...a1, ...a2]
    var a1_deepcopy = [...a1]
    ```
        - Object의 경우 값 중복이 일어나면 가장 뒤에 있는 걸 적용
    2. 함수 파라미터 넣을 때
        - Array 내의 모든 데이터를 파라미터로 집어넣고 싶은 경우 풀어헤치는 용도
        - <code>함수.apply()</code>와 용도가 같음
        ```js
        function 더하기(a, b, c) {
            console.log(a + b + c)
        }

        var a = [1, 2, 3]

        더하기.apply(undefined, a) // 예전 방식
        더하기(...a) // spread operator 사용
        ```
</details>

<details>
<summary><b>🤔 apply, call 함수 설명</b></summary>

- <code>apply(옮길곳, 파라미터1, 파라미터2...)</code>: 함수를 다른 오브젝트로 옮겨와서 실행해주세요
    - array 형태로 집어넣기 가능 -> <code>apply(옮길곳, [파라미터1, 파라미터2...])</code>
    ```js
    var person = {
            인사: function() {
                console.log(this.name, '안녕')
            }
        }

        var person2 = {
            name: '민성제'
        }
        
        person.인사.apply(person2)
    ```
- <code>call(옮길곳, 파라미터1, 파라미터2...)</code>: apply와 비슷하지만 array 형태로 집어넣을 수 없음(유일한 차이점)
</details>
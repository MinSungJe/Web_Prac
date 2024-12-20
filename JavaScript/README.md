[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://github.com/MinSungJe/FrontEnd_Prac)
# 📝 JavaScript 연습장
## 🗒️Last Update : 2024-09-23
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

<details>
<summary><b>🤔 JS 함수 파라미터 업그레이드(default 파라미터, arguments)</b></summary>

- default 파라미터
    - 파라미터에 아무것도 넣지 않았을 때 디폴트 값을 줄 수 있음
    - 디폴트 값에 수학 연산자/함수도 넣을 수 있음
        ```js
        function 더하기(a, b=2) {
                console.log(a + b)
            }

            더하기(1)
        ```
- 함수에서 arguments
    - 모든 파라미터를 한꺼번에 싸잡아서 다루고 싶을 경우 -> arguments
    - arguments: 모든 파라미터를 Array같은 자료형에 담은 변수
        ```js
        function 함수(a, b, c) {
            console.log(arguments)
        }

        함수(1,2,3)
        ```
</details>

<details>
<summary><b>🤔 arguments를 개선한 기능 -> Rest Parameter</b></summary>

- ❗<b>함수 파라미터에서 ...은 Rest Parameter</b>임!
    - 역할: ❗<b>해당 자리에 있는 모든 파라미터들을 Array에 보관</b>해줌
        ```js
        function 함수2(...파라미터들) {
                console.log(파라미터들)
            }

            함수2(1,2,3,4,5,6) // => [1,2,3,4,5,6]

        function 함수3(a, b, ...rest) {
            console.log(rest)
        }

        함수2(1,2,3,4,5,6) // => [3,4,5,6] (a, b가 1, 2임)
        ```
    - ...rest는 파라미터가 몇개들어올지 지정을 안해도 됨
    - 주의점
        1. 가장 뒤에 써야함
        2. 두번 이상 금지
- ...은 파이썬의 *(asterisk)와 기능이 같음
    - 함수 파라미터에 ...붙이면 Rest Parameter
    - 나머지는 Spread operator
</details>

<details>
<summary><b>🤔 변수에 대해 자세히 알아보자</b></summary>

- Primitive data type
    - 변수에 값이 그대로 저장됨
    - 그냥 문자와 숫자
    - 따라서 그대로 복사하면 별개의 변수로 저장됨
- Reference data type
    - 변수에 reference가 저장됨(화살표)
    - Array와 Object
    - 이때문에 발생하는 신기한 현상
        - 그대로 복사하면 화살표를 복사하는 것임!! -> 값이 공유됨
            - 별개의 변수로 활용하기 위한 복사법: deepcopy
            ```js
            var 이름1 = { name : '김' };
            var 이름2 = 이름1;
            이름1.name = '박';
            console.log(이름2) // -> { name : '박' }
            ```
        - 같은 값을 할당해도 다른 화살표임 -> 변수 두개가 같은지 비교해보면 false가 나옴
            - 굳이 값을 비교하고 싶다면 Primitive data를 지정해서 비교해 볼 것!
            ```js
            var 이름1 = { name : '김' };
            var 이름2 = { name : '김' };
            console.log(이름1 === 이름2) // -> false
            ```
        - 오브젝트를 재할당해주는 함수
            - 파라미터는 변수생성 & 할당과 똑같음
            - 따라서 함수 내에서는 기존 변수가 아닌 파라미터 변수의 reference가 변경됨
            - 기존 변수의 reference는 그대로임
             ```js
            var 이름1 = { name : '김' };

            function 변경(obj){
            obj = { name : 'park' };
            }

            변경(이름1);
            console.log(이름1) // -> { name : '김' }
            ```
</details>

<details>
<summary><b>🤔 Object 복사기, Constructor</b></summary>

- Constructor 문법 -> ❗<b>비슷한 object를 쉽게 찍어낼 수 있음!!</b>
    - 파라미터 문법으로 Object의 커스텀 가능
    - new 키워드로 생성
    - 기계: object 생성기계 (= constructor, 생성자)
    - this: 기계에서 새로 생성되는 object (= instance)
    - 부모가 가지고 있는 속성들을 자식들에게로 상속함
        ```js
        function Student(name, age) { // 파라미터로 object의 값 커스텀 가능
            this.name = name // this = 기계에서 새로 생성되는 object
            this.age = age
            this.sayHi = function() {
                console.log(`안녕하세요 ${this.name}인데요`)
            }
        }

        // Object 마구마구 생성 가능
        var 민성제 = new Student('Min', 25) // new 키워드로 생성
        var 박한민 = new Student('Park', 20) // new 키워드로 생성
        ```
</details>

<details>
<summary><b>🤔 prototype은 유전자다</b></summary>

- constructor를 만들면 prototype이라는 공간이 자동으로 생김
- prototype: 유전자
    - prototype에 값을 추가하면 모든 자식들이 물려받기 가능
        ```js
        function Student(name, age) {
            this.name = name
            this.age = age
            this.sayHi = function() {
                console.log(`안녕하세요 ${this.name}인데요`)
            }
        }

        Student.prototype.gender = '남'
        var 민성제 = new Student('Min', 25)
        console.log(민성제.gender) // -> 남
        ```
    - 동작원리
        - JS 오브젝트의 자료출력 실행순서가 이렇게 짜여있기 때문(속성을 물어봤을때)
            1. 생성된 instance가 직접 속성을 가지고 있는가?
            2. 생성된 instance의 부모 유전자가 속성을 가지고 있는가?
            3. 찾을때까지 그 부모 유전자를 찾아봄
    - 실은 JS의 내장함수도 prototype에 들어있기 때문에 실행 가능한거임
    - 특징
        1. prototype은 constructor 함수에만 생성됨
        2. 내 부모 유전자(부모의 prototype)를 검사하고 싶다면 <code>자식.__proto__</code>
            - 그렇기 때문에 __proto__를 이용하면 부모관계를 강제 등록 가능
            - 콘솔창에서도 __proto__ 알려줌
            - 같은 명령어: <code>Object.getPrototypeOf(자식)</code>
</details>

<details>
<summary><b>🤔 (easy)ES5 기능으로 구현하는 상속기능</b></summary>

- <code>Object.create()</code>를 사용함
    - 사용법: <code>Object.create(부모Object)</code>
    - 예시
        ```js
        var 부모 = { name : 'Kim', age : 50 };
        var 자식 = Object.create(부모);

        console.log(자식.age); // 50나옴
        ```
</details>

<details>
<summary><b>🤔 (hard)ES6 기능으로 구현하는 상속기능</b></summary>

- <code>class</code>문법을 사용함!
    - 사용법
        ```js
        class 부모 {
            // 여기에 파라미터 넣음
            constructor(name) {
                this.name = name
                // 여기에 함수넣으면 자식에게 직접 함수를 전달
                this.sayHi = function() { console.log('안뇽') }
            }
            // 여기에 함수넣으면 부모.prototype에 전달
            sayHey() {
                console.log('이봐, 반가워')
            }
        }

        var 자식 = new 부모('Min');
        ```
</details>

<details>
<summary><b>🤔 class를 복사하는 extends, super</b></summary>

- class를 하나더 복제하고 싶은데 그 class에 속성이 너무 많다면 하나하나 코딩하기 너무 어려움
    - 그래서 extends, super문법을 사용해 쉽게 복제 가능!!
- <code>extends</code>: 어떤 class를 물려받아 새로운 class를 만들게요~(상속)
- <code>super()</code>
    1. constructor 안: 물려받는 class의 constructor
    2. prototype 함수 안: 부모 class의 prototype (참고)
- 사용법
    ```js
    class 할아버지 {
        constructor(name) {
            this.성 = '민'
            this.이름 = name
        }
        sayHi() {
            console.log('안녕 나는 할아버지 '+this.이름)
        }
    }

    // 할아버지를 상속해 아버지라는 class 생성
    class 아버지 extends 할아버지 {
        constructor(name) {
            super(name); // constructor 안: 물려받는 class의 constructor
            this.나이 = 50;
        }
        sayHi() {
            console.log('안녕 나는 아버지 '+this.이름)
            super.sayHi() // prototype 함수 안: 부모 class의 prototype (참고)
        }
    }

    var 달수할아버지 = new 할아버지('달수')
    var 만수아버지 = new 아버지('만수')
    ```
</details>

<details>
<summary><b>🤔 getter, setter 이거 왜써요?</b></summary>

- getter: 데이터 꺼내는 함수 -> get 키워드
    - return이 있어야 함
    - 파라미터가 없어야 함
- setter: 데이터 수정하는 함수 -> set 키워드
    - 파라미터가 1개 있어야 함

- 함수를 실행하기 위해 괜히 쓰는 복잡한 소괄호를 없애기 위해 ❗<b><code>set/get</code> 키워드를 사용할 수 있음!</b>
    - set은 데이터 변경하는 함수에 붙이고 get은 데이터 꺼내쓰는 함수에 붙임
        ```js
        var 사람 = {
            name : 'Kim',
            age : 30,
            set setAge(나이){
                this.age = parseInt(나이)
            },
            get nextAge(){
                return  this.age + 1  
            }
        }

        사람.setAge = 40; // set 키워드를 추가하면 이렇게 함수를 사용가능
        console.log( 사람.nextAge ) // get 키워드를 추가하면 이렇게 함수를 사용가능
        ```

- ❗<b>근데 왜 굳이 함수를 만들어 object 데이터를 다뤄야 되나요?</b>
    1. object 자료가 복잡할 때 이득
    2. object 자료 수정 시 편리
        - 데이터를 잘못 넣은 경우를 막는 조건문을 넣을 수 있음(무결성 확보)

- ❗<b>object이외에 class에서도 get/set을 사용할 수 있음!</b>
    - prototype 함수들에도 get/set 사용할 수 있음
        ```js
        class 사람 {
            constructor(){
                this.name = 'Park';
                this.age = 20;
            }
            get nextAge(){
                return this.age + 1
            }
            set setAge(나이){
                this.age = 나이;
            }
        }

        var 사람1 = new 사람();
        ```
</details>

<details>
<summary><b>🤔 Array, Object 속 데이터를 쉽게 뽑아쓸래요: Destructuring 문법</b></summary>

- Destructuring 문법 왜써요? 
    Array/Object 안에 있는 데이터를 변수에 편하게 담는 문법
    - Array
        ```js
        var [a,b,c] = [2,3,4];
        var [a,b,c = 5] = [2,3]; // 디폴트 값도 부여 가능
        ```
    - Object
        ```js
        var { name : a, age : b } = { name : 'Kim', age : 30 };
        var { name, age } = { name : 'Kim', age : 30 }; // 변수랑 key값이 동일한 이름일때

        // 변수랑 key값이 동일한 이름일 때 object를 쉽게 만들 수 있음
        var name = 'Kim';
        var age = 30;

        var obj = { name, age }
        ```
    - ❗<b>함수 파라미터 변수 만들때도 똑같이 적용됨!</b>
        - 파라미터는 실은 변수 만드는 거랑 똑같은 행위이기 때문
            ```js
            function 함수( { name, age }) {
                console.log(name);
                console.log(age);
            }

            var obj = { name : 'Kim', age : 20 };
            함수(obj);
            ```
        - Object 뿐만 아니라 Array도 가능
            ```js
            function 함수( [name, age] ) {
                console.log(name);
                console.log(age);
            }

            var array = [ 'Kim', 30 ];
            함수( ['Kim', 30] );
            ```
</details>

<details>
<summary><b>🤔 import / export 문법</b></summary>

- ❗<b>하나의 JS 파일을 여러 개의 JS파일로 쪼갤 때 import / export 문법을 사용할 수 있음!</b>
- (참고) import 해온 변수는 read-only 변수임, 수정 불가능
    1. export default / import
    2. 여러 개를 export
    3. 둘을 동시에 사용
        ```js
        (library.js)

        var a = 10;
        var b = 20;
        var c = 30;
        export {a, b}; // 2. 여러 개를 export, 변수에 export를 붙여도 됨
        export default c; // 1. export default / import

        ------------------------
        (index.html)

        <script type="module">
            import 맘대로작명, {a,b} from 'library.js'; // a, b는 변수명 맞춰야 함
            console.log(맘대로작명);
        </script>
        ```
    4. 변수명이 마음에 안들면 as로 새로 지을 수 있음
        ```js
        (library.js)

        var a = 10;
        var c = 30;
        export {a};
        export default c;

        ------------------------
        (index.html)

        <script type="module">
            import 작명1, {a as 작명2} from 'library.js';
            console.log(작명2);
        </script>
        ```
    5. import 할때 변수들이 너무 많으면 * 기호 사용
        ```js
        (library.js)

        var a = 10;
        var b = 20;
        var c = 30;
        export {a,b};
        export default c;

        ------------------------
        (index.html)

        <script type="module">
            import 작명1, * as 변수모음 from 'library.js'; // * 안에 {a, b}
            console.log(변수모음.a);
            console.log(작명1);
        </script>
        ```
- (참고) 옛날에는 require, module.exports을 써서 모듈화했음: 이렇게 했었구나~
    ```js
    (export 하는 js파일)

    module.exports.a = 10 ;

    ------------------------
    (import 하는 js파일)

    var 가져온거 = require('/library.js'); 
    ```
</details>

<details>
<summary><b>🤔 웹브라우저 동작원리가 궁금해요</b></summary>

- 왜 이벤트리스너, setTimeout, ajax요청은 의도와 다르게 미스터리하게 동작할까?
- 웹 브라우저
    - 서버에서 받아온 HTML, CSS, JS를 실행시켜주는 프로그램
    - ❗<b>JS를 실행하는 데 일련의 과정이 있고 이를 통해 Single Thread 언어인 JS에서 비동기적 처리 가능!</b>
    - 동작원리는 아래와 같음
        1. JS 코드를 발견하면 일단 Stack에 넣고 돌림
        2. 처리가 오래걸리는 특정코드를 만나면 무조건 대기실에 보류해둠
            - ex) ajax요청, 이벤트리스너, setTimeout 등..
        3. 대기실 내 코드들이 실행준비가 되면 Queue에 넣어둠
        4. Queue에 있는 코드는 <b>Stack이 비어있을 때만</b> 차례로 집어넣어서 실행시켜줌
- JS 코드를 짤 때 Stack과 Queue를 바쁘지 않게 코드를 짜는게 중요함
</details>

<details>
<summary><b>🤔 동기와 비동기 처리, 그리고 콜백함수</b></summary>

- ❗<b>자바스크립트는 기본적으로 동기식 처리(Synchronous)</b>
    - 한 번에 코드 한 줄씩 차례로 실행
    - 오래 걸리는 연산을 만나면 처리될 때까지 멈추게 됨
- 하지만 ❗<b>비동기식 처리(Asynchronous)를 시키는 경우도 있음</b>
    - 오래 걸리는 작업이 있으면 제껴두고 다른 거부터 처리함
        - 이 때문에 웹 브라우저가 멈추지 않고 동작할 수 있음
    - 비동기식 처리를 도와주는 함수를 사용
        - 특징: 오래 걸리거나 실행까지 오래 걸리는 함수들
            - <code>setTimeout()</code>
            - 이벤트 리스너
            - ajax 요청
    - 동작원리: 비동기식 처리를 해야하는 함수 속 코드들을 <b>Web API</b>에 보냄(실행 대기실)
    - 따라서 ❗<b>Web API와 연관된 특수한 함수들을 쓰면 작업이 오래 걸릴 때 다른 거부터 실행 가능</b>

- JavaScript를 순차적으로 실행하려면 콜백함수를 사용함
    - 콜백함수: 함수 안에 들어가는 함수(함수 디자인 패턴)
        ```js
        setTimeout(콜백함수, 1000)
        ~~.addEventListener('click', 콜백함수)
        ```
    - ❗<b>콜백함수는 JS에서 함수를 순차적으로 실행시키도록 할 수 있는 함수 디자인 패턴임</b>
        ```js
        function 첫째함수(func) {
            console.log(1)
            func()
        }
        function 둘째함수() {
            console.log(2)
        }

        첫째함수(둘째함수) // -> 1 다음 2 출력
        ```
    - 콜백함수의 문제점: 콜백함수 자리에 직접 함수 선언문을 넣으면 함수가 지저분해짐
        - 이를 쉽게 쓰도록 개선한 Promise 패턴이 있음
</details>

<details>
<summary><b>🤔 콜백함수의 개선패턴, Promise</b></summary>

- Promise: 성공/실패 판정 기계
    ```js
    var 프로미스 = new Promise(function(resolve, reject){
        resolve(data); // 성공했어요
        reject(); // 실패했어요
    });

    프로미스.then(function(data){
        // 성공 시 실행할 코드
    }).catch(function(){
        // 실패 시 실행할 코드
    }).finally(function(){
        // 성공이든 실패든 판정되면 실행할 코드
    })
    ```
- Promise 쓰는 이유
    1. 옆으로 길어지지 않아서 보기 이쁨
    2. 성공/실패의 경우에 맞춰 코드 실행 가능(try/catch)
    3. 성공이든 실패든 뭔가 일어났을 때 실행할 코드도 만들 수 있음(finally)
- Promise 쓰는 예시
    - <code>jQuery.ajax()</code>, <code>fetch()</code> 등의 서버처리
- Promise의 3가지 상태
    - Promise를 출력해보면 Object형의 자료라는 것을 알 수 있음
    - Object 자료 안에는 ❗<b>Promise의 3가지 상태</b>를 담고 있음
        1. 성공하면 <code>&lt;resolved&gt;</code>
        2. 판정 대기중이면 <code>&lt;pending&gt;</code>
        3. 실패하면 <code>&lt;rejected&gt;</code>
- Promise에 대한 오해
    - Promise는 비동기적 처리를 하는 함수가 아님
        - 예를 들어 Promise 안에 10초 걸리는 연산을 시키면 브라우저는 10초동안 멈춤
    - 그냥 콜백함수 디자인의 대체품일 뿐임
</details>

<details>
<summary><b>🤔 더 쉬운 Promise, async/await</b></summary>

- 순차처리하려고, 혹은 <code>.then()</code>쓰려고 Promise 쓰기 귀찮음
- ❗<b>async를 function 앞에 붙이면 함수 실행 후에 Promise 오브젝트가 남음!</b>
    - 성공만 가능(즉 <code>.then()</code>만 가능)
    - 실패 보내려면 async function에서 결과 보낼 때 <code>return Promise.reject('내용')</code>
        ```js
        async function 더하기(){
            return 1 + 1 
        }

        더하기().then(function(결과){
            console.log(결과)
        });
        ```
- ❗<b>async 함수 안에서 Promise 쓰려면 then 대신 await 사용 가능!</b>
    - <b>await</b>: Promise 앞에 붙임, ❗<b>해당 Promise가 해결될 때까지 기다려! 라는 뜻</b>
    - ❗<b>await은 프로미스 실패 시 에러나고 멈춤 -> <code>try{}catch{}</code> 이용해야 함</b>
        ```js
        async function 더하기() {
            var 어려운연산 = new Promise((성공, 실패)=>{
                성공(남길결과);
            });

            try {
                // (async function 안에서 사용가능) 프로미스 끝날 때까지 기다려!
                var 결과 = await 어려운연산
            }
            catch { 
                // 어려운연산 Promise가 실패할 경우 실행할 코드
            }
        }
        ```
</details>

<details>
<summary><b>🤔 JS for 반복문 모두정리</b></summary>

- 반복문 사용 용례는 2가지임
    1. 코드 여러 번 실행할때
    2. Array, Object에서 자료 꺼내쓸 때

- for 반복문 종류
    - 그냥 for 반복문
        ```js
        for (let i = 0; i < 3; i++) {

        }
        ```
    - forEach() 반복문(Array 전용)
        ```js
        [0,1,2].forEach()
        ```
    - for in 반복문(Object 전용)
        1. enumerable 한 것만 반복해 줌
            - enumerable: 셀 수 있는지 여부, 
        2. 부모의 prototype도 반복해 줌
            - 만약 부모 prototype을 보기 싫으면 <code>오브젝트.hasOwnProperty(key)</code> 이용
        3. Object 자료형에만 사용       
            ```js
            var 오브젝트 = {name: 'Min', age: 30}

            for (let key in 오브젝트) {
                console.log(오브젝트[key])
            }
            ```
    - ❗<b>for of 반복문(iterable 전용)</b>
        - iterable: Array, 문자, arguments, NodeList, Map, Set...등 반복 가능한거
        - Python의 for문과 문법이 비슷함
            ```js
            for (let 자료 of iterable한거) {
                console.log(자료)
            }
            ```
</details>

<details>
<summary><b>🤔 실용적이진 않지만 Symbol 자료형 알아봅시다</b></summary>

- 심볼을 사용하는 방법: <code>var 심볼 = Symbol('설명')</code>
- 심볼의 용도: Object 자료형의 비밀스런 key값
    - 숨기고 싶은 비밀스런 데이터를 Object에 저장할 수 있음
        ```js
        var weight = Symbol('내 시크릿 몸무게임')
        var height = Symbol('내 키 정보임')

        var info = {
            name: "Min",
            age: 25,
            [height]: 160
        }
        info[weight] = 100;

        for (var key in info) {
            console.log(info[key])
        } // Min, 25만 출력됨
        ```
    - 출력이 되지 않는 이유는 Symbol은 enumerable하지 않기 때문
    - import 해온 파일 / 라이브러리 쓸 때 거기 있던 object에 자료를 추가할 때 사용 가능(기존 라이브러리를 해치지 않기 때문)
- 심볼의 특징
    1. 들어가는 설명이 같다고 같은 심볼이 아님, 심볼 만들때마다 Unique한 심볼이 생김
    2. 전역 변수같은 전역 Symbol을 만드려면 <code>var a = Symbol.for('설명1')</code>
        - 같은 설명을 가진 심볼이 위에 이미 있으면 기존 심볼을 복붙해줌
    3. 기본 내장 Symbol들
        - Array에서의 <code>Symbol.iterator</code>
</details>

<details>
<summary><b>🤔 Map / Set 자료형</b></summary>

- Map 자료형
    - 자료간의 연관성을 표현하기 위해 사용
    - key와 value를 저장함
    - ❗<b>Map 자료형에서는 key 이름으로 모든 자료형 넣을 수 있음(문자만 X)</b>
    - 사용법
        ```js
        var person = new Map(); // 생성
        person.set('name', 'Min'); // 자료넣기
        person.get('name') // 자료출력
        person.delete('name') // 자료삭제
        console.log(person.size) // 자료개수 세기

        // 직접 자료 넣기
        var person = new Map([
            ['name', 'Min'],
            ['age', 20]
        ])
        ```
- Set 자료형
    - 중복자료를 허용하지 않는 Array 비슷한 것
    - 사용법
        ```js
        var 출석부 = new Set(['민', '성', '제', '성']) // 생성
        출석부.add('김') // 자료넣기
        출석부.delete('성') // 자료삭제
        출석부.has('민') // 자료있는지 확인
        console.log(출석부.size) // 자료개수 세기
        ```
    - Set 자료형은 Array 자료형과 왔다갔다할 수 있음: ❗<b>Array의 중복자료를 제거할 때 사용 가능!</b>
        ```js
        // Set -> Array
        var 출석부 = new Set(['민', '성', '제', '성'])
        출석부2 = [...출석부]

        // Array -> Set
        var 출석부 = new Set([~~~, ~~~])
        ```
</details>

<details>
<summary><b>🤔 Web Components로 나만의 HTML 태그를 만들어보자</b></summary>

- Web Components
    - JS 문법으로 구현할 수 있는 브라우저 기본 기능임
    - 긴 HTML도 함수처럼 재사용 가능(=컴포넌트)
        ```js
        // 정의하려는 클래스는 HTMLElement를 extend해야함
        class 클래스 extends HTMLElement {
            // 불러지면 실행될 코드들
            connectedCallback() {
                // name이라는 Attribute 사용법
                let name = this.getAttribute('name')
                this.innerHTML = `<div><label>${name}</label><input></div>`
            }

            // name이라는 Attribute 변경 감지
            static get observedAttributes() {
                return ['name']
            }

            // 변경이 감지되면 실행될 코드
            attributeChangedCallback() {
                console.log(this.getAttribute('name'))
            }
        }
        
        // 선언, 클래스로 정의
        customElements.define('custom-input', 클래스)
        ```
        ```html
        <custom-input name="비번"></custom-input>
        ```
- React, Vue나 다른 라이브러리들로 더 쉽고 효율적으로 컴포넌트 문법 사용가능
</details>

<details>
<summary><b>🤔 shadow DOM 직접 만들어봅시다</b></summary>

- 복잡한 input태그 등 하나의 태그 안에 여러 태그가 있는 요소를 shadow DOM이라고 함
    - ex) range 타입의 input태그: 3개의 태그로 이루어져 있음
        ```html
        <input type="range">
        ```
- 이걸 한번 만들어보자
    1. HTML에 div태그 하나 생성
        ```html
        <div id="mordor"></div>
        ```
    2. 해당 div태그에 shadowRoot를 연결
        ```js
        document.querySelector('#mordor').attachShadow({mode: 'open'})
        ```
    3. shadowRoot에 내용 채워넣기
        ```js
        document.querySelector('#mordor').shadowRoot.innerHTML = 
        `<p>여기에내용을추가</p>`
        ```
- 근데 이거 어디다가 씀
    - 위의 Web Component에 shadow DOM을 이용해 스타일을 넣기
        ```js
        class 클래스 extends HTMLElement {
            connectedCallback() {
                this.attachShadow({mode:"open"})
                this.shadowRoot.innerHTML = `<label>이메일입력</label><input>
                <style>label {color: red}</style>`
            }
        }

        customElements.define('custom-input', 클래스)
        ```
        - shadow DOM은 독립된 공간임
        - 다른 HTML 요소에 영향을 주지 않도록 스타일을 넣을 수 있음
        - shadow DOM안의 요소에 이벤트리스너도 부착 가능함
</details>

<details>
<summary><b>🤔 HTML 임시보관함: template</b></summary>

- innerHTML을 바꾸기위해 따옴표를 이용해 HTML을 작성하는 하는건 지저분함
- ❗<b>template 태그 이용해서 HTML을 임시보관 가능!</b>
    ```html
    <template id="template1">
        <label>이메일입력</label><input>
        <style>label {color: red}</style>
    </template>
    ```
    ```js
    class 클래스 extends HTMLElement {
        connectedCallback() {
            this.attachShadow({mode:"open"})
            // template 사용
            this.shadowRoot.append(template1.content.cloneNode(true)) 
        }
    }

    customElements.define('custom-input', 클래스)
    ```
</details>

<details>
<summary><b>🤔 object에서 자료뽑을 때 사용하는 ?./?? 연산자</b></summary>

- ❗<b>?.(optional chaining 연산자)</b>
    - ?. 왼쪽이 null, undefined면 마침표 찍지말고 undefined 남겨줌
    - 중첩된 object 자료에서 자료뽑을 때 reference 에러 없이 뽑을 수 있음
        ```js
        var user = {
            name: 'Min',
            age: {value: 25}
        }

        console.log(user.age.value) // 25
        console.log(user.나이.value) // 에러 발생(undefined.value)
        console.log(user.나이?.value) // undefined
        console.log(user.나이) // undefined

        document.querySelector('#없는거')?.innerHTML // undefined
        ```
- ❗<b>??(nullish coalescing 연산자)</b>
    - ?? 왼쪽이 null, undefined면 오른쪽 내용을 남겨줌
    - 데이터가 늦게 도착할 때 대신 채워줄 문자를 설정하는 데 사용
        ```js
        var user

        console.log(user ?? '로딩중')
        ```
</details>
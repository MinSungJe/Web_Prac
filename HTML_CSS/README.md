[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/MinSungJe/FrontEnd_Prac)
# 📝 HTML5 & CSS3 연습장
## 🗒️Last Update : 2024-05-16
<details>
<summary><b>🤔 이것들이 뭔가요?</b></summary>

- HTML5
    - 모든 페이지의 기본적인 틀과 내용을 작성하는 언어
    - div로 대표되는 박스로 생각하면 구조 이해가 편할거임
- CSS3
    - HTML5 속 특정 class를 꾸미는 style을 저장하는 언어
    - <code>&lt;link rel="stylesheet" href="main.css"&gt;</code>로 연결

</details>

<details>
<summary><b>🤔 html의 모든 요소는 태그로 묶어놔야됨</b></summary>

- 모든 요소는 태그로 열고 태그로 닫아서 사용함
- h1~h6, p, button, a, img, ul, ol, li 등의 태그가 있음

</details>

<details>
<summary><b>🤔 태그 style 넣는 법</b></summary>

- 태그에다가 style 속성을 넣어도 되고
- 셀렉터로 선택해서 css로 style을 넣어도 됨
- 이렇게 사용할려면 css 연결 필수
- 스타일이 겹치는 상황이면 우선순위가 적용됨: tag -> class(.) -> id(#) -> style 속성 직접넣기
- 일부 스타일은 자동으로 부모 -> 자식으로 inherit 됨

</details>

<details>
<summary><b>🤔 display: block;이 뭔가요</b></summary>

- 가로행을 전부다 차지하도록 하는 스타일 속성
- p, div 등의 태그는 기본적으로 가지고 있음

</details>

<details>
<summary><b>🤔 가로배치 하기 1: float 속성</b></summary>

- <code>float: left;</code> : 붕 띄워서 왼쪽 정렬
- <code>float: right;</code> : 붕 띄워서 오른쪽 정렬
- 이 속성을 사용하면 다음 요소들이 붕 띄워진 요소들 뒤로 이동하게 됨
- 그래서 다음에 오는 요소에 clear: both;를 넣은 태그를 넣어둬야 함 -> float로 발생하는 이상한 현상 해결(float: left는 clear: left로 해결하는 식)
- 공중에 떠 있어서 띄워져 있는 요소 밑으로 margin이 적용되는 등의 문제가 발생하니 ❗<b>가상의 <code>clear: both</code> div박스를 활용</b>해보자

</details>

<details>
<summary><b>🤔 가로배치 하기 2: inline-block</b></summary>

- 가로로 두게 하고 싶다면 <code>display: inline-block</code>을 넣으면 됨
- inline-block: 어울림, 다른거랑 같이 있도록 display 속성을 설정가능
- 주의할 점은 둘 사이에 뭔가를 넣으면 그만큼 간격이 존재한다는 점(공백 제거)
- 사이에 주석기호를 써서 코드를 보기 좋게 바꿀 수 있음
- 혹은 부모에다가 font-size: 0px로 줘서 중간에 있는 요소들이 뭐가 있던간에 크기를 0으로 만들 수 있음
- 심지어 박스 안에다가 뭐 넣어도 틀어짐 -> <code>vertical-align: top;</code>으로 설정해서 해결
    - 그 이유는 글자의 baseline 위쪽에 박스를 채우려하기 때문 -> 마치 박스를 글자처럼 봐버림
- ❗<b>정리: <code>display: inline-block</code>은 자기 크기만큼 자리차지함</b>
    - 공백 제거 필요
    - 주변에 글이 있으면 가끔 이상해짐

</details>

<details>
<summary><b>🤔 가로배치 하기 3: display: flex</b></summary>

- <b>박스들을 감싸는 부모 요소에게 <code>display: flex;</code> 넣으면 배치 끝</b>
- flex 특징
    - table 폭하고 비슷하게 동작: width를 설정하면 무조건 그 크기대로 맞추는게 아니라 맞추려고 "노력"함
    - width 크면 밑으로 보내고 싶을 때는 <code>flex-wrap: wrap;</code> 사용
    - ❗<b>정렬은 justify-content 속성 사용</b>
    - ❗<b>flex 이용 시 세로 배치: <code>flex-direction: row/column;</code> 사용</b>
    - ❗<b>flex 이용 시 상하정렬: align-items 속성 사용</b>
    - ❗<b>특정 박스만 크기를 키우고 싶을 때 배수 적용 가능!!: <code>flex-grow: 숫자;</code></b>
</details>

<details>
<summary><b>🤔 글자 태그는 margin이 있음</b></summary>

- h4, p 등의 글자를 보여주는 태그는 기본 margin이 있음!!
- 기본 margin을 조절해서 사이의 간격을 조절해보자

</details>

<details>
<summary><b>🤔 div랑 똑같은 태그가 왜 있는거에요</b></summary>

- 태그를 살펴보면 div랑 똑같은 기능의 태그가 있음
- nav, footer, section 등.. : 페이지의 구조를 구분하고 더 명확히 하기 위해 사용
- ❗<b>이 구분을 잘 사용한 페이지를 시멘틱하다고 표현한다!!</b>

</details>

<details>
<summary><b>🤔 css에서 셀렉터 이용해 자식/자손 태그 접근하기</b></summary>

- 셀렉터1 셀렉터2: 셀렉터1 안의 모든 셀렉터2에 접근
- 셀렉터1 > 셀렉터2: 셀렉터1 안의 <b>직계자식</b> 셀렉터2에 접근
- 셀렉터1, 셀렉터2: 셀렉터1, 셀렉터2에 둘다 접근(중복 선택 가능)
- (참고) 태그에 class 2개 이상 부여하려면 <code>class="이름1 이름2"</code> 이런식으로 넣으면 됨
- (참고2) 속성값으로 접근할 요소를 고르고 싶다면 <code>셀렉터[속성=속성값]</code> 이런 식으로 입력
- (참고3) 셀렉터1:nth-child(숫자): {숫자}번째 셀렉터1을 선택함
    - 여기서 숫자 말고 even, odd 넣어서 짝수홀수 할 수도 있고 3n+0 이런 식으로 넣어서 3의 배수만 스타일을 줄 수도 있음

</details>

<details>
<summary><b>🤔 배경 이쁘게 넣어보자</b></summary>

- 배경을 이미지로 넣고싶다면 background-image 속성 사용
- 배경이 너무 크다면 background-size 속성 사용
- 이미지는 기본적으로 너무 크다면 반복함 -> background-repeat 속성 사용
- 박스크기에 비해 이미지가 너무 작다면 background-size 속성으로 cover나 contain 지정
- cover를 준 경우 배경의 위치가 마음에 안들 수 있음(왼쪽부터 배경이 채워짐)
    - background-position 속성으로 left/center/right 지정
- background-attachment 같은 속성도 있음
- filter 속성으로 그림에 여러가지 보정(채도, 밝기조정 등)을 입힐 수 있음
- background-image 속성에 url()을 여러 개 지정하면 배경이 겹치게 할 수 있음

</details>

<details>
<summary><b>🤔 골때리는 margin-collapse 현상</b></summary>

- ❗<b>박스 2개의 테두리가 겹치면 margin도 합쳐짐!!! -> margin-collapse</b>
    - 위로 둘이 겹치든, 위아래로 둘이 겹치든 큰걸 우선적으로 적용함
- 해결방법 : 테두리를 안붙게 하면 됨
    - 예를 들어 부모태그에 padding을 넣는다던가 하는 식으로 해결
    
</details>

<details>
<summary><b>🤔 내가 원하는만큼 요소를 이동시키고 싶어</b></summary>

- 내가 원하는 만큼 요소를 이동시키고 싶다면
    - margin을 그만큼 줘서 밑으로 내리던가
    - position 속성을 부여하고 좌표이동을 시키면 됨
- position 부여하면
    - 내 기준점 설정하고 좌표 이동 가능(top, bottom, left, right)
    - 공중에 뜸
- <code>position: relative;</code>: 내 원래 위치를 기준으로 이동하세요~
- <code>position: static;</code>: 좌표이동하지 말아주세요
- <code>position: fixed;</code>: 현재 화면(viewport)이 기준
- <code>position: absolute;</code>: 내 부모 태그 중 position:relative;를 가진 부모 기준

</details>

<details>
<summary><b>🤔 디테일 요소: width %의 문제 해결</b></summary>

- width %를 주면 부모 태그의 %만큼의 크기를 갖게됨
- 문제: PC에서 너무 큼 -> max-width 사용으로 제한주기
- max-width 사용 시(혹은 width) 주의 점: width는 실제 너비가 아니라 content 영역의 너비를 의미함
- ❗<b>해결책: padding과 border를 전부 포함한 것을 width로 설정하라고 명령을 줄 수 있음</b>
    - <code>box-sizing: border-box;</code>
    - 참고로 원래 default는 <code>box-sizing: content-box</code>

</details>

<details>
<summary><b>🤔 숙련자일수록 css 위에 기본설정값이 있다~</b></summary>

- 숙련자들은 CSS 파일 맨 위에 호환성 이슈 해결책부터 첨부하는 경우가 있음
- 이걸 <b>normalize</b>라고 함
- 검색 키워드: normalize.css

</details>

<details>
<summary><b>🤔 form & input</b></summary>

- 사용자의 입력을 받는 태그: form태그 안에 input태그를 넣음
- form태그 속성
    - action = "경로"
    - method = "get", "post"
- input태그 속성
    - type = "text", "checkbox", "submit" 등 input태그 종류
    - value = "미리 채워진 값"
    - placeholder = "배경 글자"
    - name = "인풋 이름"
- input태그의 설명을 쓰기 위해 label 태그를 주로 활용함
    - for = "아이디" 적고 input태그에 id = "아이디" 넣어서 활용
- form태그 안에 input말고도 여러 태그를 넣을 수 있음
    - textarea
    - select태그 안에 option태그들 넣기: 옵션박스
    - button type="submit"

</details>

<details>
<summary><b>🤔 CSS는 어떻게 작성하면 좋을까요??</b></summary>

- 재사용가능하게 class를 만들어보자
    - ex) w-50, w-100 등..
- ❗<b>Object Oriented CSS</b> : 뼈대용 class, 살점용 class를 각각 제작해보자
    - ex1) btn 뼈대 class는 따로 만들고, bg-red / bg-blue
    - ex2) Utility class: f-small, f-mid, f-lg
    - 장점: css양이 줄어들고 유지보수가 편리해짐

</details>

<details>
<summary><b>🤔 표 만들땐 table</b></summary>

- ❗<b>가로 행을 먼저 그리고(tr) 세로 열을 그리면 된다(td)</b>
- 제목용 세로열 만들땐 tr 대신 th
- 제목 행(tr)은 thead에, 일반 행(tr)은 tbody에 넣으면 좋음
- table은 기본적으로 틈이 존재
    - 없애려면 <code>border-collapse: collapse</code>
- 셀 안의 요소 상하정렬: <code>vertical-align: top/bottom/middle</code>
- (참고) 일반 div태그를 이용해 표를 만들 수 있음
    - display: table / display: tabel-row / display: table-cell
</details>

<details>
<summary><b>🤔 display: inline</b></summary>

- ❗<b>항상 옆으로 채워지는 폭과 너비가 없는 요소들</b>
- inline/inline-block 요소 간의 세로 정렬할 때는 vertical-align을 쓸 수 있음
</details>

<details>
<summary><b>🤔 table 태그 쓸 때 특이한 포인트</b></summary>

- 테두리 색상을 밑에만 넣고 싶다면 border-bottom 쓰면 됨
- 셀 블록마다 width를 설정해 줄 수 있음
    - 이 때 하나의 td에 width를 줘도 그 열의 전체 width가 변함
- td 여러개를 합치고 싶다면 colspan 사용 / tr은 rowspan
</details>

<details>
<summary><b>🤔 table 태그에 border-radius가 안먹는데요</b></summary>

- border-collapse 속성을 적용해서 둘이 충돌이 일어나 안먹는 경우임
- 해결방법
    - border-spacing: 0; 사용
        ```css
        table {
        border-collapse : collapse;
        border-spacing : 0;
        }

        (왼쪽위에있는 td) {
        border-top-left-radius : 5px;
        }
        ```
    - 테두리를 가짜로 만들어내는 편법
        ```css
        table {
        border-collapse : collapse;
        border-radius : 7px;
        border-style : hidden;
        box-shadow : 0 0 0 1px #666;
        }
        ```
</details>

<details>
<summary><b>🤔 pseudo-class로 버튼을 누름직하게 만들어보자</b></summary>

- 버튼태그에서 pseudo-class를 이용해 디자인이 가능함
    - cursor 속성: 마우스 갖다댔을 때 마우스의 변화 설정
    - 버튼:hover 셀렉터: 마우스 갖다댔을 때 버튼의 변화 설정하는 pseudo-class
    - 버튼:active 셀렉터: 마우스를 클릭했을 때 버튼의 변화 설정하는 pseudo-class
    - 버튼:focus 셀렉터: 버튼이 focus 됐을 때 버튼의 변화 설정하는 pseudo-class
    - pseudo-class 넣을 땐 순서가 중요함: hover -> focus -> active (hofa)
- a태그에서도 쓰임
    - text-decoration 속성: 링크 꾸미는 요소 설정(none, underline 등)
    - a:link 셀렉터: 방문 전 링크 스타일링
    - a:visited 셀렉터: 방문 후 링크 스타일링
</details>

<details>
<summary><b>🤔 내 페이지에 font를 넣고 싶어요</b></summary>

- 커스텀 폰트 넣는법:
    - css 파일로 가서 내가 준비한 폰트파일을 등록
        ```css
        @font-face {
        font-family: '작명';
        src: url(경로~~~);
        }
        ```
    - 이후 적용할 셀렉터에서 <code>box-sizing: '작명';</code>
- 한글폰트 사이즈는 너무 큼: 1~2개만 쓰자
- 혹은 ttf말고 woff쓰자 -> 웹에서 사용하기 위해 용량을 줄인 폰트임
- font-weight 속성: 폰트의 굵기를 줄 수 있는데 그냥 주면 안이쁨 -> 굵은 폰트를 따로 등록해야됨
- 폰트파일을 호스팅해주는 Google Fonts를 사용해도 됨
- 폰트를 부드럽게 처리하는 안티앨리어싱 해보려면 -> 폰트를 매우조금 돌려주면 됨
    - <code>transform: rotate(0.03deg);</code>
</details>

<details>
<summary><b>🤔 반응형 레이아웃을 만들어보자</b></summary>

- 반응형 레이아웃이란: 창이 작아지거나 모바일 환경에서 보기 좋게 바뀌는 레이아웃
- PC용 레이아웃부터 먼저 만들어서 적용해보자
- 관련 단위
    - vw: 브라우저 폭에 비례
    - vh: 브라우저 높이에 비례
    - rem: 기본 폰트사이즈에 비례(html 태그 폰트사이즈의 10배, 기본값 16px)
    - em: 내 폰트사이즈의 X배
- 반응형 만들려면 넣어야 하는 meta 태그:
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```
- ❗<b>CSS파일에 media query문법을 적는다!</b>
    - 추가해주는 개념이므로 CSS 파일 밑에 적자
    - ex) 현재 브라우저 폭이 1200px 이하일 경우 적용할 스타일 적는법
        ```css
        @media screen and (max-width: 1200px) {
            셀렉터1 {
                font-size: 25px;
            }
            셀렉터2 {
                스타일~~~~~
            }
        }
        ```
    - 중복 적용 가능
    - (참고) breakpoint 기준 px값은 다른사람 따라하는걸 권장
        - 1200px / 992px / 768px / 576px
        - 1200px 이하는 태블릿, 768px 이하는 모바일로 디자인하는게 간편함
</details>

<details>
<summary><b>🤔 옛날 IE로 접속했을 때 쓰는 CSS파일을 적용하고 싶어</b></summary>

- 왜 옛날 IE용 CSS를 만들어야 하나?: 지원하지 않는 문법이 있기 때문
    - ex) display: flex; 등
- 옛날 IE용 CSS를 따로 제작 후 link 태그를 하나 더 넣으면 되는데 If문을 사용
    ```html
    <!--[if lt IE 9]>
    <link rel="stylesheet" type="text/css" href="css/ie8.css" />
    <![endif]-->
    ```
- 호환성이 목표라면 IE용 class를 따로 하나 더 만들어주는 것도 good
</details>

<details>
<summary><b>🤔 Font Awesome 라이브러리를 이용해 아이콘을 넣고싶어</b></summary>

- 먼저 Font Awesome 라이브러리를 다운
    - CDN(Content Delivery Network): 다른 웹사이트에서 불러와서 가져다쓰는거
    - 직접 파일 다운
- 스타일링은 글자처럼 가능
</details>

<details>
<summary><b>🤔 one-way 애니메이션 만드는 step</b></summary>

- one-way 애니메이션은 4가지 step이 있음
    1. 시작스타일 만들기
    2. 최종스타일 만들기
    3. 언제 최종스타일로 변하는지(trigger)
    4. transition 줘서 전환효과 주기
- (참고) transition의 전환속도 관련 함수를 조정하기 위해선 transition-timing-function
</details>

<details>
<summary><b>🤔 Bootstrap을 써봅시다</b></summary>

- 사이트 가서 cdn으로 설치(css, js를 연결)
- Bootstrap을 쓰는 이유
    - 부트스트랩 사이트에서 복붙식 개발 가능
        - 거의 뼈대 디자인이므로 css파일로 커스터마이징 가능
    - Utility Class 사용 가능
        - container, mt-5, pb-5, fs-3, text-center, fw-bold 등..
</details>

<details>
<summary><b>🤔 Bootstrap으로 반응형 레이아웃 만들기(grid)</b></summary>

- .row와 .col을 이용하면 균일하게 쪼개기 가능
- 정확한 사이즈인 가로로 쪼개고 싶으면 <code>col-차지할크기</code> (한 줄은 12칸 있음)
- 반응형을 추가하고 싶으면 조건문을 더하면 됨
    - col<b>-md-</b>6 (md 사이즈 이상에서만 6사이즈를 적용해주세요)
    - xl: 1200px / lg: 992px / md: 768px / sm: 576px
- 이를 이용해 @media 문법 없이도 반응형 레이아웃 개발 가능
- Grid Layout만 쓸 수 있는 라이브러리도 제공함
- order-숫자 부착해서 div박스 순서 재배치도 가능
    - 역시 중간에 조건문 추가 가능 ex) order-md-3
- 부트스트랩 반응형 레이아웃을 사용할 때 col 클래스는 여러 개 써도 되고, 모바일 먼저 만드는게 편함
    - 그냥 CSS에서는 맨 마지막에 media query가 들어가므로 PC화면을 먼저 만듦
</details>

<details>
<summary><b>🤔 CSS 덮어쓰기 하는 법</b></summary>

- 세 가지 방법 중 하나로 써보자
    - 그냥 같은 클래스명 하단에 쓰기
        - 같은 이름인데 더 밑에 있으면 그 스타일을 적용함
        - html 내 css 선언도 더 밑에 해두면 그 css의 내용을 적용함
        - @media 문법을 하단에 작성해야 되는 이유
    - 우선순위 높이기
        - ex) class 대신 id나 html내 style속성을 넣어버리기
        - ❗<b>주어진 스타일 옆에 !important를 넣으면 무조건 적용시켜줌(만점짜리)</b>
    - specificity 높이기
        - 특정적으로 열심히 셀렉터 써서 찝은 경우는 우선순위가 부여됨
            - ex) .container .test 는 .test보다 우선순위가 크다
            - ex) p.container는 .container보다 우선순위가 크다
        - 셀렉터가 복잡하면 미래에 덮어쓰기 힘들어짐
            - 평소에 스타일을 하나만 써서 쓰는게 좋다
- Bootstrap 사용 시에는 덮어쓰기 보다는 class 추가하는게 흔함
    - 내 css파일을 부트스트랩 cdn보다 더 아래에 선언해주자
</details>

<details>
<summary><b>🤔 좋은 코드의 원칙</b></summary>

- 나중에 수정/관리가 쉬운가?
- 확장성이 좋은가? (재활용 가능한지, 확장해서 다른 class 만들기 쉬운지)
</details>

<details>
<summary><b>🤔 pseudo-element?</b></summary>

- (참고) :pseudo-class / ::pseudo-element
- pseudo-class: 다른 상태일 때 스타일링, 콜론 하나
- pseudo-element: 내부의 일부분만 스타일 줄때, 콜론 두개
- ::first-letter, ::first-line 등..
- 그나마 자주 사용하는거
    - ::after -> 내부 맨 뒤에 뭔가 추가할 때
    - ::before -> 내부 맨 앞에 뭔가 추가할 때
    - content 속성으로 내용 추가 가능
- 숨겨진 요소(Shadow DOM) 스타일줄때도 ::사용함
</details>

<details>
<summary><b>🤔 특정 태그는 하나만 넣어도 요소가 두 개 나오는 이유가 뭐에요? </b></summary>

- ex) input[type=file]태그는 하나만 넣어도 버튼과 span태그가 생성됨
- 이렇게 자동으로 만들어진 요소들은 숨겨짐: Shadow DOM라 함
- 그렇다면 이렇게 생성된 shadow DOM에 스타일링을 하고싶다면?
    - pseudo-element(내부 일부만 스타일주고 싶을 때 씀) 사용
    - shadow DOM 보기 설정을 한 뒤 해당 요소에 있는 pseudo 확인 후 pseudo-element 스타일 주면 됨
    - user agent stylesheet(브라우저 기본 스타일)에서 셀렉터 살짝 따와도 됨
        - ❗<b>user agenet stylesheet가 있다면 수정이 안될 수 있음</b> -> 상위에 <code>apperance: none;</code>을 넣어야 함(기본 스타일 입히기 말아주세요)
    - pseudo에서 맨 처음 들어가는 요소 설명
        - -webkit- : 크롬, 사파리, Edge에서 적용되는 스타일
        - -moz- : Firefox에서만 적용
        - -ms-: IE에서만 적용
</details>
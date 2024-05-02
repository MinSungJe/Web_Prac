[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/MinSungJe/FrontEnd_Prac)
# 📝 HTML5 & CSS3 연습장
## 🗒️Last Update : 2024-05-02
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
- (참고) 태그에 class 2개 이상 부여하려면 <code>class="이름1 이름2"</code> 이런식으로 넣으면 됨

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
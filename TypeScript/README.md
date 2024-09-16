[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://github.com/MinSungJe/Web_Prac)
# 📝 TypeScript 연습장
## 🗒️Last Update : 2024-09-16
<details>
<summary><b>🤔 TypeScript가 뭐에요?</b></summary>

- JavaScript + Type부분 업그레이드 => TypeScript
    - Dynamic typing을 지원하는 JS에서 type을 엄격하게 체크하도록 변경
        1. 타입 관련 에러를 잡아줌
        2. 에러의 퀄리티가 좋아짐
- JS 문법 그대로 TS에서 사용가능
</details>

<details>
<summary><b>🤔 TypeScript 설치기사입니다</b></summary>

- HTML/CSS/JavaScript
    1. nodejs 설치
    2. VScode 에디터 준비
    3. 터미널 열고 <code>npm install -g typescript</code>
    4. 코드짤 폴더 만들고 에디터로 폴더 오픈
    5. <code>어쩌구.ts</code> 파일 생성 후 코드 작성
    6. <code>tsconfig.json</code> 생성 후 내용 작성
        ```json
        {
            "compilerOptions": {

                "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
                "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
                // -------------- 보통은 여기까지 --------------
                "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지 
                "checkJs": true, // 일반 js 파일에서도 에러체크 여부 
                "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
                "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
                "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
                "outDir": "./", //js파일 아웃풋 경로바꾸기
                "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
                "removeComments": true, //컴파일시 주석제거 

                "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
                "noImplicitAny": true, //any타입 금지 여부
                "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기 
                "strictFunctionTypes": true, //함수파라미터 타입체크 강하게 
                "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
                "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
                "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기

                "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
                "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
                "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기 
                "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기 
            }
        }
        ```
    7. 터미널켜서 <code>tsc -w</code> 입력
        - 브라우저는 무조건 js만 읽을 수 있음
        - 해당 명령어는 ts파일을 js파일로 자동변환해주는 명령어임(컴파일)
        - 컴파일 옵션은 tsconfig.json에서 설정가능
    8. 변환된 js파일을 html에 적용
- React
    - 기존 React 프로젝트에 설치(에러 발생할 수 있음)
        <code>npm install --save typescript @types/node @types/react @types/react-dom @types/jest</code>
    - 그냥 처음부터 React 프로젝트 새로 만들기
        <code>npx create-react-app my-app --template typescript</code>
- Vue
    1. 터미널 열고 <code>vue add typescript</code> -> 라이브러리 설치
    2. vue 파일에서 타입스크립트를 쓰려면 lang 옵션을 켜두고 쓰면 됨
        ```html
        <script lang="ts">
            ...
        </script>
        ```
</details>

<details>
<summary><b>🤔 TypeScript 기초적인 타입 소개</b></summary>

- <b>TypeScript에서는 변수에 타입 지정 가능 = 변수에 실드씌우는 것임</b>
    - <code>변수명 :타입명</code>
        ```ts
        let 이름 :string = 'Min';
        let 나이 :number = 25;
        let 결혼여부 :boolean = false;
        let 널 :null = null;
        let 언디파인드 :undefined = undefined;
        let 회원들: string[] = ['Min', 'Kim']
        let 회원정보:{name: string, age: number} = { name: 'Min', age: 25 }
        ```
    - 장점: 타입이 실수로 변경될 때 에러 내줌
    - 사실.. TypeScript에서 타입지정은 원래 자동으로 됨 -> 타입지정 문법 생략가능
</details>

<details>
<summary><b>🤔 미리 정하기 애매한 타입을 만드는 방법</b></summary>

- ❗<b>Union Type</b>
    - 타입에 |(or) 기호 사용해서 새로운 타입을 만들 수 있음(가변적인 타입)
        ```ts
        let 회원 :number | string = 123;
        let 어레이 :(number|string)[] = [1, '2', 3]
        let 오브젝트 :{a : string|number} = {a : '123'}
        ```
- ❗<b>any Type</b>
    - 모든 자료형을 허용하는 타입(타입실드 해제)
        ```ts
        let 아무거나 :any;
        ```
- ❗<b>unknown Type</b>
    - 모든 자료형을 허용하는 타입2, 하지만 unknown이라는 타입을 부여함
    - 무조건 타입실드를 해제하는게 아니라 any보다 안전성 있음
        ```ts
        let 아무거나2 :unknown;
        ```
</details>

<details>
<summary><b>🤔 함수에 타입 지정하는 법, void 타입</b></summary>

- ❗<b>함수는 파라미터, return값에 타입을 지정할 수 있음</b>
    ```ts
    function 함수(x: 파라미터타입1, y: 파라미터타입2): 리턴타입 {
        return 리턴타입의 자료
    }
    함수(파라미터타입1의 자료형, 파라미터타입2의 자료형)
    ```
- 타입 지정된 파라미터는 함수쓸때 필수로 들어가야 함
    - ❗<b>파라미터가 옵션일 경우 ?을 이용해 옵션으로 선언 가능</b>
        - 들어올 수 있다~란 뜻이긴 한데 ❗<b>정확히는 union 타입으로 undefined랑 결합된거랑 똑같음</b>
        - 함수 파라미터 뿐만 아니라 object내 키값에도 ?를 사용할 수 있음
            ```ts
            function 내함수(x? :number) { 
                
            }
            내함수(); //가능
            내함수(2); //가능

            // 위 함수는 아래 함수랑 똑같은 함수임
            function 내함수(x :number|undefined) {

            }
            ```
- 함수에서 어떤 값을 return하지 않는 함수의 경우 return값 타입에 void 지정 가능
    - 실수로 return 하는 것을 막아줄 수 있음
        ```ts
        function 내함수(x :number) :void { 
            return x * 2 // void인데 뭔가 return하려고 하니까 여기서 에러남 
        }
        ```
</details>

<details>
<summary><b>🤔 애매한 타입을 없애는 Type Narrowing</b></summary>

- ❗<b>어떤 변수가 타입이 아직 불확실하면 if문 등으로 Narrowing 해줘야 조작 가능!</b>
    - 예를 들어 애매한 타입에 조작을 하는 경우가 있음
        ```ts
        function 내함수(x :number | string){
            return x + 1 // Error! 
            // number|string 이라는 타입엔 number를 더할 수 없기 때문
        }
        ```
- Narrowing 방법은 다음과 같음
    - 그냥 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 다 인정해줌
        - <code>if (typeof 변수 === '타입명') {}</code>
            - TS에선 함수 안에서 if문 쓸때 마지막 else문 없으면 에러날 수 있음
        - <code>속성명 in 오브젝트자료</code>
        - <code>인스턴스 instanceof 부모</code>
    - 아니면 assertion 문법(타입 덮어쓰기)
        1. Narrowing 할 때 씀: 타입을 변경할 때 쓰는게 아님, 에러남
        2. 무슨 타입이 들어올지 100% 확실할 때 쓰셈
        3. 대표적인 사용처
            - 왜 타입에러가 나는지 정말 모르겠는 상황에 임시 에러해결용
            - 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때
        - 사용법: <code>변수 as 타입명</code>
        - 옛날 as문법: <code>&lt;number&gt;이름</code>: html 태그랑 헷갈려서 안 씀
</details>

<details>
<summary><b>🤔 타입이 길면 변수로 써보세요~: type alias</b></summary>

- ❗<b>타입이 너무 길면 변수에 담아쓸 수 있음 => type alias(=별명)</b>
    - type 변수 작명 관습: 일반 변수랑 차이점을 만들기 위해 영어 대문자로 시작
        ```ts
        type Animal = string | number | undefined;
        let 동물 :Animal;
        ```
    - object 타입도 저장 가능
        ```ts
        type 사람 = {
            name : string,
            age : number,
        }

        let teacher :사람 = { name : 'john', age : 20 } 
        ```
    - type 키워드 여러 개를 합칠 수 있음
        - 일반적인 방법으로 <code>|</code>(or) 연산자 활용
            ```ts
            type Name = string;
            type Age = number;
            type NewOne = Name | Age; 
            ```
        - object에 지정한 타입의 경우에도 합치기(=extend) 가능: <code>&</code>(and) 연산자 활용
            ```ts
            type PositionX = { x: number };
            type PositionY = { y: number };
            type XandY = PositionX & PositionY
            let 좌표 :XandY = { x : 1, y : 2 }
            ```
    - type 키워드는 재정의 불가
        ```ts
        type Name = string;
        type Name = number; // 에러남
        ```
</details>

<details>
<summary><b>🤔 TS에서 object를 다루는 테크닉들 소개(readonly, ?)</b></summary>

- readonly
    - const 자료는 원래 재할당이 불가능한 자료임
    - 하지만 const로 object를 선언하면 그 안의 값을 변경하는 걸 막지 않음
    - 이걸 막는 키워드: <code>readonly</code>
        ```ts
        type User = {
            readonly name : string,
        }

        let 유저: User = {
            name : '민성제'
        }

        유저.name = '성민제' // readonly라서 에러남
        ```
- ?
    - 함수 파라미터랑 비슷하게 object의 키값에도 ?를 사용할 수 있음
    - <code>타입?</code> = <code>타입 | undefined</code>
        ```ts
        type Square = {
            color? : string,
            width : number,
        }

        let 네모2 :Square = { 
            width : 100 
        }
        ```
</details>

<details>
<summary><b>🤔 더 엄격해진 변수: Literal Types</b></summary>

- 특정한 값만 넣을 수 있는 타입을 만들 수 있음!: Literal Types
- 사용법
    ```ts
    let 이름: 'MinSungJe';
    ```
- 쓰는 이유
    - 변수가 뭐가 들어올지 더 엄격하게 관리 가능
    - VSCode의 기능에 의해 자동완성 가능
    - const 변수의 업그레이드 버전이라고 볼 수 있음
        - const 변수는 값을 바꿀 수 없지만, 다른 옵션을 부여할 수 없음
        - Literal Type은 |(or) 연산자의 사용이 가능하므로 옵션부여 가능
            ```ts
            let 방향: 'left' | 'right';
            방향 = 'left'; // left 또는 right만 가능(옵션 부여)
            ```
- Literal Type은 함수 파라미터에도 당연히 사용가능
    - 이 때, 변수처럼 쓸 수 있다해서 ❗<b>함수 파라미터에 해당 타입을 맞추라고 한거지 해당 자료를 넣으라고 한 게 아니란 거에 유의!</b>
        ```ts
        var 자료 = {
            name : 'kim'
        }

        function 내함수(a : 'kim') {}
        
        // 에러남, 'kim'이라는 타입만 받는데 string을 넣었기 때문
        내함수(자료.name)
        ```
    - 이에 대한 해결책으로는 3가지가 있음
        1. object 만들 때 object안의 요소에 대한 타입 미리 정하기
        2. assertion을 써서 강제로 타입부여
        3. <code>as const</code>를 object에 붙이기
        - ❗<b><code>as const</code>는 object를 마치 const처럼 절대 변경할 수 없는 값으로 박제</b>하는 효과임
            1. object내 key값들의 타입을 value(Literal Type)로 바꿔줌
            2. object 안에 있는 모든 속성을 readonly로 바꿔줌(변경하면 에러)
                ```ts
                var 자료 = {
                    name : 'kim'
                } as const; // as const 추가

                function 내함수(a : 'kim') {}
                내함수(자료.name) // 에러 안남
                ```
</details>

<details>
<summary><b>🤔 함수와 methods에 type alias를 지정하고 싶어요</b></summary>

- function type도 type alias로 저장이 가능함
    ```ts
    type NumOut = (x: number, y: number ) => number;
    ```
- 저장된 function type을 사용하고 싶다면 함수선언식이 아닌 함수표현식으로 함수를 작성해야 함
    ```ts
    type NumOut = (x: number, y: number ) => number;
    function Numout() { return x+y } // 함수선언식, type alias 적용 불가능
    let 함수이름작명: NumOut = function(x,y){
        return x + y
    } // 함수표현식
    ```
- methods(오브젝트 안 함수) 안에도 타입지정 가능
    ```ts
    type Member = {
        name : string,
        age : number,
        plusOne : ( x :number ) => number,
        changeName : () => void
    }

    let 회원정보: Member = {
        name : 'kim',
        age : 30,
        plusOne (x){
            return x + 1
        },
        changeName : () => {
            console.log('안녕')
        }
    }
    
    회원정보.plusOne(1);
    회원정보.changeName();
    ```
</details>

<details>
<summary><b>🤔 TypeScript로도 당연히 HTML 요소 조작 가능합니다</b></summary>

- TS는 JS에 type을 더한 것 뿐이므로 당연히 JS처럼 HTML 요소를 다룰 수 있음
- 근데 JS 쓰듯이 그냥 쓰면 에러남
    - <code>querySelector()</code>로 찾은 요소는 해당하는 요소가 없을 수 있기 때문에 type이 <code>Element|null</code>인 Union Type임
    - 근데 <b>요소를 조작하려면 Union 타입이 아닌 Element 타입으로 Narrowing 시켜야 함!</b>
        ```ts
        let 제목 = document.querySelector('#title');
        제목.innerHTML = '반갑소' // 에러, Narrowing 필요
        ```
- HTML 조작 시 narrowing 과정 5가지
    1. <code>제목 != null</code>로 narrowing
        ```ts
        let 제목 = document.querySelector('#title');
        if (제목 != null) {
            제목.innerHTML = '반갑소'
        }
        ```
    2. ❗<b><code>instanceof</code>로 narrowing</b>: 더 좋은 방법임
        ```ts
        let 제목 = document.querySelector('#title');
        if (제목 instanceof HTMLElement) { // 해당 클래스의 instance인지 확인하는 키워드
            제목.innerHTML = '반갑소'
        }
        ```
    3. assertion으로 사기치기
        ```ts
        let 제목 = document.querySelector('#title') as HTMLElement;
        제목.innerHTML = '반갑소'
        ```
    4. optional chaining 연산자: 왼쪽에 있는 object 자료 안에 .innerHTML이 있으면 그거 쓰고 없으면 undefined 남겨주세요~
        ```ts
        let 제목 = document.querySelector('#title');
        if (제목?.innerHTML != undefined) { // optional chaining
            제목.innerHTML = '반갑소'
        }
        ```
    5. 그냥 tsconfig의 strict 설정 false로 끄기
- HTML 조작 시 주의점
    - ❗<b>HTML 요소를 <code>instanceof</code>로 narrowing 할 때 해당 태그에 맞는 상세타입으로 narrowing 해줘야함!</b>
        - a -> HTMLAnchorElement
        - img -> HTMLImageElement
        - h4 -> HTMLHeadingElement
        - 기타등등..
    - 이벤트리스너 붙일 때 optional chaining 신문법 사용 가능
        ```ts
        let 버튼 = document.getElementById('button');

        // 버튼에 addEventListener 있으면 붙여주고 없으면 undefined로 남겨줘
        버튼?.addEventListener('click', function(){
            console.log('안녕')
        }) 
        ```
</details>

<details>
<summary><b>🤔 class 만들 때도 타입 지정 가능</b></summary>

- class 필드 타입 지정 가능
- 필드 값에 미리 선언해둬야 constructor에서 사용 가능
- Prototype 함수(필드와 똑같은 위치에서 선언)에 타입지정 가능
- 당연히 함수 관련된 rest parameter, default parameter 사용 가능
    ```ts
    class Person {
        data: number = 0 // 필드 타입 지정 가능
        name: string; // 필드값에 미리 선언해둬야 constructor 사용 가능
        constructor(파라미터: string) { // 파라미터에도 타입지정 가능
            this.name = 파라미터
        }

        // 프로토타입 함수에도 타입지정 가능
        함수(a: string): void {
            console.log('프로토타입 함수임: '+a)
        }
    }

    let 사람1 = new Person('Min')
    let 사람2 = new Person('Sung')
    사람1.함수('테스트')
    ```
</details>

<details>
<summary><b>🤔 Object에 타입 지정할 때 type 외에 interface도 있어요</b></summary>

- Object에 타입 지정할 때 type 말고도 class처럼 interface를 이용해 지정할 수 있음
    ```js
    // class 선언하듯 interface로 타입선언
    interface Square {
        color: string,
        width: number
    }
    let 네모: Square = {color: 'red', width: 100}
    ```
- ❗<b>interface 장점: extends로 복사가능!</b>
    ```ts
    interface Student {
        name: string
    }
    interface Teacher extends Student {
        age: number
    }

    let 학생: Student = { name: 'Min' }
    let 선생: Teacher = { name: 'Min', age: 20 }
    ```
    - 만약 extends 쓸 때 중복속성 발생하면 에러로 잡아줌
- 사실 type도 & 기호(intersection type)을 이용해 비슷하게 장점구현 가능
    - & 기호(intersection type): 두 타입을 전부 만족하는 타입
        ```ts
        type Animal = { name: string };
        type Cat = { age: number } & Animal
        ```
    - 만약 &로 연결할 때 중복속성 발생하면 미리 에러가 안나므로 주의
- type과 interface의 차이점
    - ❗<b>interface는 중복선언 가능하지만, type은 중복선언 불가능</b>
        - interface를 중복선언하면 두 interface가 합쳐진다!! (유연)
            - 외부 라이브러리같은 경우 interface 많이 씀
            - 추후에 해당 타입에 뭐 더하는게 쉬움
        - type은 중복선언하면 에러가 발생한다. (엄격)
</details>
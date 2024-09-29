[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://github.com/MinSungJe/Web_Prac)
# 📝 TypeScript 연습장
## 🗒️Last Update : 2024-09-29
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
        - <code>인스턴스 instanceof 부모class</code>
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

<details>
<summary><b>🤔 ...(rest parameter, destrcuturing)에도??</b></summary>

- rest parameter에도 타입지정가능: Array 형태로 들어오므로 Array 식으로 선언
    ```ts
    function 함수(...a: (number|string)[]) {
        console.log(a)
    }
    함수(1,2,3,4,5,6,'히히')
    ```
- destructuring 할 때도 타입 지정 가능
    ```ts
    let 오브젝트 = {student: true, age: 20}

    function 함수({student, age}: {student: boolean, age: number}) {
        console.log(student, age)
    }
    함수(오브젝트)
    ```
</details>

<details>
<summary><b>🤔 Type Narrowing 하는 방법 2</b></summary>

- null & undefined 타입 체크하려는 경우
    ```ts
    function 함수(a: string|undefined) {
    if (a && typeof a === 'string') {
            // a가 undefined면 조건문 실행 X / string이면 조건문 실행 O
        }
    }
    ```
- typeof 연산자는 number, string, boolean, object 등의 기본적인 타입만 판정가능
- ❗<b>in 키워드로 object narrowing 가능</b>
    - <code>속성명 in 오브젝트자료</code>
        ```ts
        type Fish = {swim: string};
        type Bird = {fly: string};

        function 함수(animal: Fish|Bird) {
            if ('swim' in animal) { // Fish라고 Narrowing 됨
                let 변수 = animal.swim
            }
        }
        ```
- ❗<b>object 두개가 비슷하면 부모 class가 누군지 물어봐서 narrowing 가능</b>
    - <code>오브젝트명 instanceof 부모class</code>
        ```ts
        let 날짜 = new Date()
        if (날짜 instanceof Date) {
            // Date의 인스턴스일때 실행됨
        }
        ```
- ❗<b>비슷한 object 타입일 경우 literal type 강제로 만들어두면 도움됨</b>
    ```ts
    type Car = {
        wheel: '4개',
        color: string
    }

    type Bike = {
        wheel: '2개'
        color: string
    }

    function 함수(x: Car|Bike) {
        if (x.wheel === '4개') {
            // 리터럴 타입을 이용해 Car타입만 통과되도록 Narrowing
        }
    }
    ```
- ❗<b>결론: 논리적으로 이 타입인지 특정지을 수 있으면 Narrowing으로 인정해줌</b>
</details>

<details>
<summary><b>🤔 never 타입 소개글</b></summary>

- ❗<b>never: 코드를 이상하게 짜면 출몰하는 타입</b>
    1. 뭔가 이상한 narrowing
    2. 어떤 함수표현식(에러내뿜는함수)은 return 타입이 자동으로 never
        ```ts
        let 함수 = () => {
            throw new Error() {

            }
        }
        ```
- function return 값이 다음과 같을 경우 붙일 수도 있음
    1. return 값이 없어야 함
    2. endpoint가 없어야 함
        - 사실 모든 함수는 <code>return undefined</code>를 가지고 있음
        - 따라서 어떤 함수가 절대 끝나지 않아야 함
            1. 에러가 나는 함수
            2. 반복문이 멈추지 않는 함수
- 그럼 이거를 어디다가 써요?
    - 대부분 쓸데 없음: void로 대체 가능
    - 근데 몇몇 경우에 출몰하는 경우가 있으므로 알아만 두자~
</details>

<details>
<summary><b>🤔 public, private, protected, static도 사용가능</b></summary>

- 타입스크립트는 객체 지향 언어에 사용하는 public, private, protected, static 키워드 사용 가능
- 이 키워드를 쓰면 constructor 안에서 `this.name = name` 같은거 생략가능
    ```ts
    // 수정 전
    class Person { 
        name;
        constructor ( name: string ){  
            this.name = name;
        } 
    }
    let 사람1 = new Person('Min')

    // 수정 후
    class Person { 
        constructor ( public name: string ){  

        } 
    }
    let 사람1 = new Person('Min')
    ```
- <b>public</b>
    - class 안의 원하는 속성 왼쪽에 붙이면 그 속성은 아무데서나 수정 가능
        ```ts
        class User {
        public name: string;

        constructor(){
                this.name = 'kim';
            }
        }

        let 유저1 = new User();
        유저1.name = 'park';  //가능
        ```
        - 사실 속성을 그냥 만들면 public이 왼쪽에 몰래 부여됨
        - (참고) public 키워드는 class 내 prototype 함수에도 붙일 수 있음
- <b>private</b>
    - class 안의 원하는 속성 왼쪽에 붙이면 ❗<b>그 속성은 무조건 class {} 안에서만 수정 가능</b>
    - class 안에서만 사용하고 싶은 중요한 변수나 속성에 사용(안전장치)
    - 외부에서 수정하면 안되는 변수나 속성에 사용
        ```ts
        class User {
        public name: string;
        private familyName: string;  

        constructor() {
                this.name = 'SungJe';
                let hello = this.familyName + 'Min'; // 가능
            }
        }

        let 유저1 = new User();
        유저1.name = 'MinJe';  // 가능
        유저1.familyName = 'Kim'; // 에러남
        ```
    - private 부여된 속성을 class 밖에서 수정해야할 경우
        1. class 안에 private 속성을 수정하는 함수를 만들고(setter)
        2. 외부에서 함수를 실행시키면 됨
- <b>protected</b>
    - class 안의 원하는 속성 왼쪽에 붙이면 private랑 비슷하게 class {} 안에서만 사용가능
    - private랑 다른 점은 `extends`된 class {} 안에서도 사용가능
        ```ts
        class User {
            protected x = 10
        }

        class NewUser extends User {
            doThis() {
                this.x = 20 // 사용가능
            }
        }
        ```
- <b>static</b>
    - class 안의 원하는 속성 왼쪽에 붙이면 부모 class에 직접 부여됨
    - class로 만든 자식에게 물려주지 않음, extends 하면 잘 따라옴
    - 특정 속성을 숨길 때 사용 가능하지만.. 그럴거면 private, protected 쓰는게 나음
    - 위 3가지 속성과 동시에 사용 가능
        ```ts
        class User {
            public static x = 10
            y = 20
        }

        let 자식 = new User()
        console.log(자식) // x가 나오지 않음
        console.log(User.x) // x가 출력됨
        ```
</details>

<details>
<summary><b>🤔 타입도 import export 가능함</b></summary>

- 타입도 JS import/export 하는 것 처럼 내보내고 불러낼 수 있음
    ```ts
    // (a.ts)
    export type Name = string

    // (index.ts)
    import {Name} from './a'
    let 변수: Name = 'Sung'
    ```
- 예전에는 import/export 문법이 없어서 파일을 여러개 불러왔었음
    - 변수명이 겹치는 경우 발생
    - ❗<b>그래서 외부 파일에서 사용하지 않을 변수들을 감췄음: namespace</b>
        ```ts
        // (a.ts)
        namespace 네임스페이스 {
            export type Name = string | number;
        }

        // (index.ts)
        ///<reference path='./a.ts'/> // 불러오는 방법임
        let 변수: 네임스페이스.Name = 'Sung'
        ```
        - type 뿐만 아니라 interface도 감출 수 있음
        - 옛날에는 `namespace` 대신 `module`이었음
</details>

<details>
<summary><b>🤔 타입을 파라미터로 전달하는 Generic</b></summary>

- ❗<b>`function 함수<사용할타입명>() {}`으로 타입을 파라미터로 전달가능!</b>
- 사용하는 일례
    ```ts
    function 함수(x: unknown[]) {
        return x[0];
    }

    let a = 함수([4,2])
    console.log(a + 1) // 오류남: unknown + number을 하려 했기 때문 
    ```
    ```ts
    // MyType이라는 이름으로 타입을 파라미터로 전달
    function 함수<MyType>(x: MyType[]) :MyType {
        return x[0];
    }

    let a = 함수<number>([4,2])
    let b = 함수<string>(['kim', 'park'])
    ```
- 보통 `<T>`같은걸로 많이 함
- ❗<b>Generic에 들어가는 타입을 제한할 수 있음</b>
    ```ts
    function 함수<MyType extends number>(x: MyType) {
        return x - 1
    }

    let a = 함수<number>(100) // number로 제한
    ```
- 커스텀 타입도 extends 가능: 특정 속성을 가지고 있는 지 체크 가능!
    ```js
    interface lengthCheck {
        length : number
    }
    function 함수<MyType extends lengthCheck>(x: MyType) {
        return x.length
    }

    let a = 함수<string>('hello')  // 가능
    let a = 함수<number>(1234) // 에러남
    ```
- (참고) class, 타입변수도 타입을 파라미터로 전달 가능
</details>

<details>
<summary><b>🤔 TS를 다른 거랑 묶어보자1: React</b></summary>

- 설치: `npx create-react-app 프로젝트명 --template typescript`
- `.tsx`: jsx 문법을 쓰는 파일의 확장자
- `.ts`: 일반 파일
- ❗<b>잘 쓰는 법</b>
    1. 일반변수, 함수 만들 때 타입지정 잘하자
    2. JSX(html 요소)를 표현하는 타입이 있음!: `JSX.Element`
        ```tsx
        let 박스 :JSX.Element = <div></div>
        ```
    3. component 만들 때 타입지정 가능: 파라미터, return값
        ```tsx
        function Profile(): JSX.Element {
            return (
                <div>프로필인데요</div>
            )
        }
        ```
    4. component props 타입지정: props는 object 형식으로 전달받는다!
        ```tsx
        // (너무 길면 항상 type alias 사용가능한걸 절대 기억해)
        function Profile(props: {name: string}): JSX.Element {
            return (
                <div>{props.name} 프로필인데요</div>
            )
        }
        ```
    5. useState 타입지정
        ```tsx
        // 처음값에 따라 타입지정 자동으로 되므로 신경 안써도 됨
        let [user, setUser] = useState('kim')

        // 근데 string|number 타입을 넣고 싶으면 Generic 문법 사용
        let [user, setUser] = useState<string|number>('kim')
        ```
</details>

<details>
<summary><b>🤔 TS를 다른 거랑 묶어보자2: Redux</b></summary>

- ❗<b>Redux(전역 상태 관리 라이브러리)</b>
    1. 모든 컴포넌트가 state 공유 가능
    2. 수정방법을 파일 한 곳에 정의해둠: 오류가 났을 때 하나 파일만 들여다보면 됨
- 설치방법: `npm install redux react-redux`
- redux에서 만드는 거는 두가지 -> ❗<b>여기에 똑같이 변수와 함수정의에 타입지정하면 됨!</b>
    1. 모든 컴포넌트가 공유할 state(변수)
        ```tsx
        const 초기값: {count: number}  = { count: 0 };
        ```
    2. 미리 정의할 state 수정방법(함수)
        ```tsx
        // 인자: state, action을 인자로 받음
        // state: 위에서 타입지정했으면 알아서 
        // action: 수정요청(dispatch())날릴 때 거기 넣는 파라미터랑 같음
        // action.type을 string으로 쓰기 때문에 그걸 타입지정
        function reducer(state = 초기값, action: {type: string}) {
            if (action.type === '증가') {
                return { count : state.count + 1 }
            } else if (action.type === '감소'){
                return { count : state.count - 1 }
            } else {
                return initialState
            }
        }
        ```
- redux로 만들어 둔 state를 컴포넌트에서 쓰는 법
    - 꺼내는 요즘 문법: `useSelector()` 훅 사용
        - 타입은 정의한 곳에서 import
    - 수정하는 요즘 문법: `dispatch()` 사용
        - 타입은 redux에서 제공하는 타입 사용
- (참고) <b>@reduxjs/toolkit 쓰면 redux의 더러운 if-else문을 `createSlice()`라는 함수로 정리할 수 있음</b>
    - 설치방법: `npm install @reduxjs/toolkit`
    - state, reducer를 object로 정리할 수 있음 -> slice
    - 함수라 보기 좋음
    - stat 수정 시 사본만들 필요가 없음
    - action은 `PayloadAction`을 redux toolkit에서 import해서 타입지정 하면 됨
</details>

<details>
<summary><b>🤔 array에 타입넣는 법: tuple</b></summary>

- 지금까지 array에 타입 지정한 방법
    ```ts
    let 멍멍: (string|boolean)[] = ['dog', true]
    ```
- ❗<b>tuple타입을 이용하면 위치와 순서까지 고려한 타입지정 가능!</b>
    - 사용법
        ```ts
        // 첫 번째
        let 멍멍: [string, boolean] = ['dog', true]
        ```
    - tuple 안에 옵션 표시 가능, 맨 뒤쪽에서만 사용 가능
        ```ts
        let 멍멍: [string, boolean?] = ['dog'] // boolean값이 들어와도 되고 들어오지 않아도 됨
        ```
    - 함수에서 쓰는 tuple(Rest parameter 타입지정 시)
        ```ts
        function 함수(...x: [number, string]) {
            console.log(x)
        }
        함수(1, '2')
        ```
    - array 합칠 때 spread 연산자 쓰는 데 이때 타입지정은?: 똑같이 rest parameter 쓰듯이 쓰면 됨
        ```ts
        let arr = [1,2,3]
        let arr2: [number, number, ...number[]] = [4,5, ...arr]
        ```
</details>
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://github.com/MinSungJe/Web_Prac)
# 📝 TypeScript 연습장
## 🗒️Last Update : 2024-09-01
<details>
<summary><b>🤔 TypeScript가 뭐에요?</b></summary>

- JavaScript + Type부분 업그레이드 => TypeScript
    - Dynamic typing을 지원하는 JS에서 type을 엄격하게 체크하도록 변경
        1. 타입 관련 에러를 잡아줌
        2. 에러의 퀄리티가 좋아짐
- JS 문법 그대로 TS에서 사용가능
</details>

<details>
<summary><b>🤔 TypeScript 설치기사 왔습니다</b></summary>

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
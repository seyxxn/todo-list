## Summary 
* velopert 투두 리스트 : https://velopert.com/3480
* todolist 깃허브 레퍼지토리 : https://github.com/seyxxn/todo-list

## Detail
* 작업 환경 설정

    - Node LTS 버전

    - yarn

    - 에디터 -> VSCode 사용
* 리액트 프로젝트 생성 도구 **create-react-app** 사용

    - `yarn global add create-react-app` 설치


* 프로젝트 생성

    - `create-react-app 프로젝트명`

    - 프로젝트 생성 완료

* 서버 시작

    - `yarn start`

    - localhost로 접속

* 프로젝트 초기화 

    - App.js 내용 변경

    - App.css , App.test.js , logo.vsg 삭제

### < 1. 컴포넌트 구성하기 >
- src/components 파일 생성
1. 첫번째 컴포넌트, **TodoTemplate** 
    - TodoTemplate.js, TodoTemplate.css 생성

    - 함수형 컴포넌트 생성

    - 파라미터로 받은 {form,children}은 props -> 비구조화 할당 이용

2. 두번째 컴포넌트, **Form**
    - 인풋과 버튼이 담긴 컴포넌트

    - Form.js, Form.css 생성
    - 4개의 props를 받음
        - value : 인풋의 내용
        - onCreate : 버튼이 클릭될 때 실행되는 함수 
        - onChange : 인풋내용이 변경될 때 실행되는 함수

        - onKeyPress : 엔터키를 눌렀을 때 onCreate 한것과 동일하게 하는 함수


3. 세번째 컴포넌트, **TodoItemList**

    - TodoItem 컴포넌트 여러개를 렌더링해주는 역할

    - 주의) 리스트가 동적인 경우 함수형이 아닌 클래스형 컴포넌트로 작성해야 컴포넌트의 성능이 최적화 됨

    - TodoItemList.js 생성 (템플릿 이미 만들었으므로, css 파일 필요 X)
    - 3개의 props를 받음
        - todos : todo객체들이 들어간 배열

        - onToggle : 체크박스 키고 끄는 함수

        - onRemove : 삭제시키는 함수 


4. 네번째 컴포넌트, **TodoItem**
    - TodoItem.js, TodoItem.css 생성

    - 5개의 props를 받음
        - text : todo 내용

        - checked : 체크박스 상태
        - id : todo의 고유 아이디
        - onToggle : 체크박스 키고 끄는 경우
        - onRemove : 아이템 삭제

### < 2. 상태관리하기 >
- 상태관리가 필요한 컴포넌트 : Form, TodoItemList

- Form 기능 구현하기

    - Form에서 필요한 기능 세가지   

        1. 텍스트 내용이 바뀌면 state 업데이트

        2. 버튼 클릭 시, 새로운 todo생성과 todos 업데이트

        3. 입력에서 enter 입력시 버튼 클릭과 동일한 작업

- 컴포넌트에 메소드를 구현해야함

    - App.js에 handleChange, handleCreate, handleKeyPress 구현

- TodoItemList에서 배열을 TodoItem 컴포넌트 배열로 변환하기 -> map함수 사용
    
    1. TodoItemList에 todos 전달

    2. TodoItemList를 열어서 객체 배열을 컴포넌트 배열로 변환  

- 체크하기/풀기 함수
- 아이템제거 함수 -> filter 함수 사용 


## Issue
* 내용은 어느정도 이해했으나, 코드 이해 어려움

* todolist 완성 -> 디자인 커스텀 정도만 응용
![](https://ifh.cc/g/BaZOvg.png)

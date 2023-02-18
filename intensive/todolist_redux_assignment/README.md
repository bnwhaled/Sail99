### [과제] 숙련주차 과제 답

> 1번문제 : 추가하기 기능 오류

1. 변경을 위해 import Dispatch로 리듀서로 보낼 payload 설정 필요
   const dispatch =useDispatch()
2. 이벤트 발생시 action creator 불러와(addTodo)
   바뀔내용은

1) id:todo.length+1 로 id이름 늘리기
2) 그 외에 setTodo로 들어가서 바뀐 todo.title과 todo.body

> 2번문제 : 추가하기 버튼 클릭 후 기존에 존재하던 아이템들이 사라짐.

- 리로드 문제: 클릭시 preventDeault의 오탈자로 새로고침 문제

> 3번문제 : 삭제 기능이 동작하지 않음.

-

> 4번문제 : 상세 페이지에 진입 하였을 때 데이터가 업데이트 되지 않음.

> 5번문제 : 완료된 카드의 상세 페이지에 진입 하였을 때 올바른 데이터를 불러오지 못함.

> 6번문제 : 취소 버튼 클릭시 기능이 작동하지 않음.

> 배포

> 그 외 에러

//시작전 설치문제

1.  error Couldn't find a package.json file in "C:\\Users\\Colossalyoon\\Documents\\Desktop\\React 숙련 주차\_시험문제 (1)"
    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
2.  error-Command-start-not-found
3.  package.json-No-license-field

//시도, 해결
npm install로 종속파일 설치
yarn init --force == 패키지 네임 입력
npm i concurrently express --save == 터미널 실행할 수 있도록 명령어 실행
project내 yarn start 실행

//children 키
Warning: Encountered two children with the same key, `NaN`

# Todolist

# yarn react 폴더 생성

# 필요 없는 부분 삭제

# 폴더 생성

        - components
        - pages
        - redux[config- configStore.js] , [modules- todos]
            1. config 폴더 : redux 설정관리
                configStore.js => store(중앙 state 관리소)
            2. modules 폴더 : (중앙 state에서 관리하는)state의 그룹
                ex) todo.js => 삭제 여부, 제목 등
        - shared(Router.js)

# index.js , App.js 연결 확인

# Router, redux 패키지 다운

        [yarn add react-router-dom]
        [yarn add redux react-redux]

# Router.js

        [import 부분]
        - import { BrowserRouter, Routes, Route } from 'react-router-dom';
        - 페이지 연결 ex) import Todos from '../pages/Todos';
        [Router 연결하기]
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Todos />} />
            </Routes>
          </BrowserRouter>

# configStore.js - state(전역 상태), reducer(상태를 제어하는 역할)가 있음

    [import 부분]
    [import { createStore, combineReducers } from "redux";]
    => createStore : store를 만드는 API
    => combineReducers : reducer를 한번에 묶는 역할

    const rootReducer = combineReducers({todos});
    => rootReducer : reducer를 한번에 묶어 놓은 기본 reducer
    => combineReducers({}) : reducer의 묶음들이(modules) 객체 안에 들어가면
    state의 집단들이 rootReducer에 들어오게 됨,
    모든 컴포넌트들은 poops로 값을 내려주지 않아도 중앙 데이터 관리소로 데이터를 바라볼 수 있게 된다.

    const store = createStore(rootReducer);
    => store 생성(중앙 데이터 관리소), 실행이 되면 return 값을 store에 넣어 줌
    => 괄호 안은 reducer의 묶음이 들어가야 함(rootReducer)

# App.js

            [import 부분 => css, Router, Provider, store 연결]

            [Provider 연결하기]
            <Provider>
                <Router />
            </Provider>
        * Provider 는 react-redux 라이브러리에 내장되어있는
        리액트 앱에 store 를 손쉽게 연동 할 수 있도록 도와주는 컴포넌트!
        (
            1. import해와야 되는 내용들을 import하기
            2. Reducer를 하나로 합쳐서 Store에 넘겨주기
            3. Store에 리듀서를 생성하기
            4. Store를 export하기
        )

            [store 연결하기]
           [import store from './redux/config/configStore';]
           * 경로 조심 *

# modules / todos.js

    [초기 상태값 state]
    export const initialState = {
        counter : 0,
        users : {[key:value}]
    }

    [reducer]
    변화를 일으키는 함수로 두 가지의 파라미터를 받아온다.(state, action)
    현재 상태, 전달 받은 액션을 참고하여 새로운 상태를 만들어서 반환한다.

    const todos = (state = initialState, action) => {
        switch(action.type){
            default :
                return state;
    }

    => action은 type, value를 갖고 있음, state를 어떻게 수정할건지 +, - 중 뭐를 할건지 action에 대해 표현하는 것
    => switch문을 통해 action 객체 type에 따라 어떤 동작을 하게끔 만들어 줌
    => 값이 아무것도 없을 때 최초 state , default만 return
    => 만약 state가 변경되었다면 변경된 값으로 return

# Home.js

    const Home = () => {
        store에 접근하여 값을 읽어오고 싶다.
        * 사용하는 훅 : useSelector
        ex) const userList = useSelector((state)=>state.todos)
    }

# Home.js - 메인페이지 JSX 작성

    [
        1) UI내에서 event가 일어날 때 state(중앙 데이터 관리소)에 값을 변경해야 된다고 요청이 들어옴
        ex) onClick

        2) UI에서 Dispatch(eventHandler)로 전달해 주면, dispatch가 요청을 수행해줌

        3) dispatch가 action 객체(type, payload)를 갖고 store를 방문 =>
           (즉, dispatch는 UI의 action을 store로 던져주는 역할)

       4) action에 있는 type에 따라서 reducer가 state를 제어/변경
    ]

# dispatch 가져 오기(Home.js)

    [const dispatch = useDispatch()]

    dispatch(addTodos({
        (action 객체)
        type : '',
        payload : '',
    }))
       => type은 case명
       => payload : action 객체라는 것은 action type을 payload 만큼 처리하는 것
          ex) payload가 3이면 3만큼을 payload

        * 참고 *
        dispatch(toggleTodos())
        괄호를 적지 않으면 함수의 내용을 전달해 주는 것이며, 괄호를 적으면 함수를 실행하겠다!

        * 참고 *
        reducer와 component 호출하는 부분은 항상 일치해야 함

# (payload) state를 이용해서 value, onChange로 엮어주기(Home.js)

        [import 부분]
        import React, { useState } from 'react';

        [로컬(해당 컴포넌트 내부)]
        const [title, setTitle] = useState('');
        const [memo, setMemo] = useState('');


        [컴포넌트 태그에 엮어주기]
        ex) <input className='title_style' type="text" placeholder="제목" value={title} onChange={titleAddHandler} />


        [로컬(해당 컴포넌트 내부)]
        const titleAddHandler = (event) => {
        setTitle(event.target.value);
        }

        const memoAddHandler = (event) => {
        setMemo(event.target.value);
        }

# 유효성 검사(Home.js) : if문 사용(input 값이 없으면 실행 안되게 하는 기능)

        const clickAddButtonHandler = () => {
            if(title===""||memo==="")return
            dispatch(addTodos({title,memo}))
            setTitle("");
            setMemo("");
    }

# modules / todos.js

        switch문 변경 된 값으로 return하기
    => 로컬 state가 업데이트 된 게 아니라 redux에 있는 store에 있는 state가 업데이트 된 것

# actionCreate, actionValue로 만들기

        => dispatch의 action을 편하고 정확하게 보내기 위한 함수

        1) export 하기(todos.js)
        ex) export const REMOVE_TODOS = "todos/REMOVE_TODOS"

        2) actionCreate 하기(todos.js)
        ex)  export const addTodos = (payload) => {
                return {
                    type:ADD_TODOS,
                    payload,
                }
             }

        3) module에서 import 하기(Home.js)
        ex) import { addTodos } from '../redux/modules/todos';

        4)dispatch 수정(Home.js)
        ex) dispatch(addTodos({title,memo}))


    * useParams => 리액트에서 라우터 사용 시 파라미터 정보를 가져와 활용하고 싶다면 useParams라는 훅 사용
      (쇼핑몰 웹사이트를 예를들면 메인 페이지에서 여러개의 값을 렌더링하고,
      클릭한것만 렌더링 시키고자 할때 하나하나 다 onclick 이벤트를 사용하기가 번거로운데,
      useParams 로 해결 가능)

        1) import 부분
        import { useParams } from 'react-router-dom';

        2) useParams 정보를 하나의 변수에 저장
        const params = useParams()


    * useNavigate => 양식이 제출되거나 특정 event가 발생할 때, url을 조작할 수 있는 interface를 제공

        1) import 부분
        import { useNavigate } from 'react-router-dom';

        2) const navigate = useNavigate()

        ex) 뒤로가기 기능 : <StBtn onClick={()=>navigate(-1)}>뒤로가기</StBtn>

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

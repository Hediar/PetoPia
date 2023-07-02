## :partying_face: 주요 기능
- 로그인, 회원 가입
- 게시물 작성 및 수정, 삭제
- Redux로 데이터 관리
- 마이 페이지
- 배포하기
## :sunglasses:주요 파일
#### -firebase.js: firebase 환경 변수 파일
#### -Posting.jsx: 글 작성 관련 페이지
#### -SignupPage.jsx: Firebase Authentication 회원 등록
#### -LoginPage.jsx: Firebase Authentication 로그인
#### -fids.js: Redux로 받아온 firestore db 제어
#### -DetailFeedPage.jsx: 피드 상세정보 페이지
#### -DetailPage.jsx: nav바 동물 메뉴 페이지
<br/><br/>
## :boxing_glove: 개발기간
#### (23.06.26~23.07.03)
<br/><br/>
## :sunflower: 사용언어
#### <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
<br/><br/>
## :cowboy_hat_face: 미리보기
<br/><br/>
## :pushpin: Trouble Shooting
#### 현상:auth/too-many-requests 에러가 발생
#### 원인: Firebase 인증 서비스의 일시적인 제한 조건에 의해 발생할 수 있다. 이 오류는 동일한 사용자로 인한 인증 요청이 너무 많을 때 발생한다
#### 해결:DB 초기화 하거나 몇 분 동안 인증 요청을 중단하고 잠시 후 다시 시도
#### 현상:게시글 posting 버그(posting을 수행하면 다른 게시글 까지 사진이 변경되는 문제)
#### 원인: 게시글 경로 오류
#### 해결:shortid를 이용하여 게시글 id의 폴더로 사진이 저장되도록 수정
#### 현상:{selectefFile.name} error
#### 원인:모달창을 열었을 때 파일이 선택되지 않았을 때 값이 없기 때문에 error가 발생
#### 해결: 특정 상황에 따라 값을 return 해주는 함수를 추가
<br/><br/>

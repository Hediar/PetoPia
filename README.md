<<<<<<< HEAD
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=😺PetoPia😺&fontSize=90" />

## 프로젝트 소개

여러 애완 동물들의 사육정보 및 자기 동물 소개 해주는 소통 및 정보 공유 사이트입니다.
Firebase를 활용해서 DB를 관리해주고 리덕스로 해당 정보 제어를 해줬습니다.

## :boxing_glove: 개발기간

#### (23.06.26~23.07.03)

## 화면 구성

| 메인 페이지 | 피드 페이지 |
| :---------- | :---------: |

![image](https://github.com/Hediar/PetoPia/assets/69897998/c0944829-26b0-4eb2-8374-d547d0ad0cac)
![image](https://github.com/Hediar/PetoPia/assets/69897998/9328e4d0-81bb-4bf2-bb9a-182541288882)
|
| 마이페이지 | 동물 상세 페이지 |
![image](https://github.com/Hediar/PetoPia/assets/69897998/4832375b-5365-451a-9351-84cd80f92acd)
![image](https://github.com/Hediar/PetoPia/assets/69897998/bb011c35-761e-4a40-921a-5688216152c1)
|

---

## :partying_face: 주요 기능

### 메인페이지

#### Firestore에서 DB가져오기

- 유저 글을 가져오고, 피드 정보 리스트를 불러옵니다.

#### 회원 관리 페이지

- 회원 등록이 가능합니다.
- 회원 로그인, 로그아웃이 가능합니다.

#### 마이페이지

- 자신이 만든 글을 불러옵니다.
- 자신의 글을 삭제, 수정 가능합니다.

### 상세 페이지

- Firestore에서 들어가있는 동물들의 사육 정보 불어옵니다.
- 유저들이 등록해논 해당 동물 종의 피드글을 볼 수도 있습니다.

### 상세 피드 페이지

- 유저들이 올려논 피드들을 볼 수 있습니다.

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

## :sunflower: Stacks

### Environment

#### ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)

#### ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)

#### ![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

#### <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>

<br/><br/>

## :pushpin: Trouble Shooting

#### 현상:auth/too-many-requests 에러가 발생

#### 원인: Firebase 인증 서비스의 일시적인 제한 조건에 의해 발생할 수 있다. 이 오류는 동일한 사용자로 인한 인증 요청이 너무 많을 때 발생한다

#### 해결:DB 초기화 하거나 몇 분 동안 인증 요청을 중단하고 잠시 후 다시 시도

#### 현상:게시글 posting 버그(posting을 수행하면 다른 게시글 까지 사진이 변경되는 문제)

#### 원인: 게시글 경로 오류

#### 해결:shortid를 이용하여 게시글 id의 폴더<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=😺PetoPia😺&fontSize=90" />

## 프로젝트 소개

여러 애완 동물들의 사육정보 및 자기 동물 소개 해주는 소통 및 정보 공유 사이트입니다.
Firebase를 활용해서 DB를 관리해주고 리덕스로 해당 정보 제어를 해줬습니다.

## 화면 구성

| 메인 페이지 | 피드 페이지 |
| :---------- | :---------: |

![image](https://github.com/Hediar/PetoPia/assets/69897998/c0944829-26b0-4eb2-8374-d547d0ad0cac)
![image](https://github.com/Hediar/PetoPia/assets/69897998/9328e4d0-81bb-4bf2-bb9a-182541288882)
|
| 마이페이지 | 동물 상세 페이지 |
![image](https://github.com/Hediar/PetoPia/assets/69897998/4832375b-5365-451a-9351-84cd80f92acd)
![image](https://github.com/Hediar/PetoPia/assets/69897998/bb011c35-761e-4a40-921a-5688216152c1)
|

---

## :partying_face: 주요 기능

### 메인페이지

#### Firestore에서 DB가져오기

- 유저 글을 가져오고, 피드 정보 리스트를 불러옵니다.

#### 회원 관리 페이지

- 회원 등록이 가능합니다.
- 회원 로그인, 로그아웃이 가능합니다.

#### 마이페이지

- 자신이 만든 글을 불러옵니다.
- 자신의 글을 삭제, 수정 가능합니다.

### 상세 페이지

- Firestore에서 들어가있는 동물들의 사육 정보 불어옵니다.
- 유저들이 등록해논 해당 동물 종의 피드글을 볼 수도 있습니다.

### 상세 피드 페이지

- 유저들이 올려논 피드들을 볼 수 있습니다.

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

## :sunflower: Stacks

### Environment

#### ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)

#### ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)

#### ![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

#### <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>

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

<br/><br/>로 사진이 저장되도록 수정

#### 현상:{selectefFile.name} error

#### 원인:모달창을 열었을 때 파일이 선택되지 않았을 때 값이 없기 때문에 error가 발생

#### 해결: 특정 상황에 따라 값을 return 해주는 함수를 추가

# <br/><br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=😺PetoPia😺&fontSize=90" />
## 프로젝트 소개
여러 애완 동물들의 사육정보 및 자기 동물 소개 해주는 소통 및 정보 공유 사이트입니다.
Firebase를 활용해서 DB를 관리해주고 리덕스로 해당 정보 제어를 해줬습니다.
## 화면 구성  
|                                                      메인 페이지                                                       |                                                      피드 페이지                                                       |
| :--------------------------------------------------------------------------------------------------------------------| :--------------------------------------------------------------------------------------------------------------------: |
 ![image](https://github.com/Hediar/PetoPia/assets/69897998/c0944829-26b0-4eb2-8374-d547d0ad0cac)
  ![image](https://github.com/Hediar/PetoPia/assets/69897998/9328e4d0-81bb-4bf2-bb9a-182541288882)
 |
|                                                     마이페이지                                                     |                                                    동물 상세 페이지                                                     |
|                                               ![image](https://github.com/Hediar/PetoPia/assets/69897998/4832375b-5365-451a-9351-84cd80f92acd)
                                                |                                               ![image](https://github.com/Hediar/PetoPia/assets/69897998/bb011c35-761e-4a40-921a-5688216152c1)
                                                |
---
## :partying_face:  주요 기능
### 메인페이지
#### Firestore에서 DB가져오기
- 유저 글을 가져오고, 피드 정보 리스트를 불러옵니다.
#### 회원 관리 페이지
- 회원 등록이 가능합니다.
- 회원 로그인, 로그아웃이 가능합니다.
#### 마이페이지
- 자신이 만든 글을 불러옵니다.
- 자신의 글을 삭제, 수정 가능합니다.
### 상세 페이지
- Firestore에서 들어가있는 동물들의 사육 정보 불어옵니다.
- 유저들이 등록해논 해당 동물 종의 피드글을 볼 수도 있습니다.
### 상세 피드 페이지
- 유저들이 올려논 피드들을 볼 수 있습니다.
## :sunglasses:주요 파일
#### -firebase.js: firebase 환경 변수 파일
#### -Posting.jsx: 글 작성 관련 페이지
#### -SignupPage.jsx: Firebase Authentication 회원 등록
#### -LoginPage.jsx: Firebase Authentication 로그인
#### -fids.js: Redux로 받아온 firestore db 제어
#### -DetailFeedPage.jsx: 피드 상세정보 페이지
#### -DetailPage.jsx: nav바 동물 메뉴 페이지
<br/><br/>

<br/><br/>

## :sunflower: Stacks

### Environment

#### ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)

#### ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)

#### ![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

#### <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>

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

> > > > > > > cf8a0a273b30a5ab43c44d27c5f5d4f12f5fa2a4


<img width="1920" height="1080" alt="캘픽 썸네일" src="https://github.com/user-attachments/assets/631d55e0-c5a3-4fb3-9aca-d549d0019536" />

# 💻 캘픽 FRONTEND

## 1. 프로젝트 개요

<img src="https://github.com/user-attachments/assets/11a896f7-f7d6-4c33-83b4-17eb37589b09" width="350" alt="캘픽"/>

**📌 캘픽이란?** : 캘픽은 친구, 지인과의 일정 조율을 간편하게 도와주는 일정 공유 서비스입니다.  
캘린더를 공유해 로그인 없이도 약속 신청이 가능하며, 복잡한 일정 조율 과정을 최소화합니다.  

**📌 개발 기간** : 2025.07.07 ~ 2025.08.12 

**📌 배포 링크** : <a href="https://calpick.vercel.app/">🔗 캘픽</a>

**📌 주제 선정 이유** : 
- 일정 캡처·공유 없이 실시간 일정 공유 가능  
- 단체 채팅방에서 스케줄을 일일이 확인해야 하는 번거로움 해소  
- 복잡한 일정 조율을 간편하게 해결  
- 회원가입 없이도 약속을 신청할 수 있는 간단한 서비스 제공


<br/>
<br/>

## 2. 팀원 구성 및 역할
<div align="center">
  
  | 최민경 | 김유진 | 박인배 |
| :-: | :-: | :-: |
| <img src="https://avatars.githubusercontent.com/u/100355178?v=4" width="200"/> | <img src="https://avatars.githubusercontent.com/u/162581612?v=4" width="200"/> | <img src="https://avatars.githubusercontent.com/u/139768745?v=4" width="200"/> |
| [@mxkxx1011](https://github.com/mxkxx1011) | [@yujini-kim](https://github.com/yujini-kim)  | [@humanpear](https://github.com/humanpear) |

</div>


- 🙋🏻‍♀️ 최민경
  - 인증 기능 (로그인, 회원가입 및 카카오 로그인) 
  - 친구 관련 기능 (친구 검색, 추가, 삭제 등)
  - 알림 리스트
  - 인트로 가이드 추가
  - 자동화 CI/CD 구축

- 🙋🏻‍♀️ 김유진
  - API 개발 전 msw 환경 세팅 및 구축   
  - 전반적인 캘린더 UI 및 기능 개발 (내 캘린더, 친구/공유 캘린더)
  - 캘린더 무한스크롤 
  - 일정 수정 / 삭제 기능
  - 리팩토링 및 컴포넌트 스토리작성

- 🙋🏻‍♂️ 박인배
  - API 개발 전 msw 환경 세팅 및 구축
  - 일정 등록 및 관련 컴포넌트 개발   
  - 회원 여부에 따른 약속 신청 기능 
  - 신청한 약속 / 신청 받은 약속 필터링 
  - 사용자 편의성 개선



<br/><br/>



## 3. 기술 스택 & 도구


**개발 환경**

<img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"/> <img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"/>



**사용 기술 스택**

<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/><br/>
<img src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white"/> <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white"/> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/> <img src="https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white"/>


**테스트 툴**

<img src="https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B"/> <img src="https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white"/>


**협업 툴**

<img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white"/> <img src="https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white"/>

**배포환경**

<img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"/>

**CI/CD**

<img src="https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white"/>

**디자인**

<img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"/>

<br/><br/>

## 4. 프로젝트 구조

```
📦 
├─ .coderabbit.yaml       # 코드래빗 설정 파일
├─ .github                # CI/CD 워크플로우 파일 및 템플릿 파일
├─ .husky                 # commit, push 단위 CI
├─ .prettierrc            # 팀 단위 프리티어 규칙
├─ .storybook             # 스토리북
├─ public                 # 정적 리소스(이미지, 폰트, 아이콘 등) 저장 폴더 
├─ src
│  ├─ app                 # 앱 전역 설정, Provider
│  ├─ entities            # 도메인 모델과 상태(User, Schedule 등)
│  ├─ features            # 독립적인 기능 단위(인증, 친구추가, 약속신청 등)
│  ├─ index.css
│  ├─ main.tsx
│  ├─ pages               # 라우트 단위 페이지
│  ├─ shared              # 공용 UI, hooks, utils 등
│  │  ├─ api              # axios-instance 위치
│  │  ├─ assets           # svg icon 위치
│  │  ├─ hooks            # 공통 커스텀 훅
│  │  ├─ lib              # 채널톡 설정 등
│  │  ├─ types            # 공통 타입
│  │  ├─ ui               # 공통 UI 컴포넌트
│  │  └─ utils            # 공통 유틸함수
│  └─ widgets             # 페이지 내 주요 UI 블록(캘린더 등)
```

## 5. 주요 기능

- **회원 인증**
  - 이메일 회원가입 및 로그인
  - 카카오 간편 로그인 지원

- **일정 관리**
  - 개인 일정 등록, 수정, 삭제 기능 제공

- **약속 관리**
  - 약속 신청, 수락, 거절 기능을 통한 일정 조율

- **캘린더 공유**
  - 캘린더를 공유하여 상대방이 로그인 없이 약속 신청 가능

- **친구 기능**
  - 친구 신청 및 관리
  - 친구 캘린더에 약속 신청 가능

<br/>

## 6. 트러블 슈팅

- [트러블슈팅-캘린더 페이지 일정 중복 및 상세일정 누락 문제 해결](https://github.com/1-team-zzang/frontend/wiki/%5B%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85%5D-%EC%BA%98%EB%A6%B0%EB%8D%94-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9D%BC%EC%A0%95-%EC%A4%91%EB%B3%B5-%EB%B0%8F-%EC%83%81%EC%84%B8%EC%9D%BC%EC%A0%95-%EB%88%84%EB%9D%BD-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0)
- [트러블슈팅-vercel 404 에러](https://github.com/1-team-zzang/frontend/wiki/%5B%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85%5D-vercel-404-%EC%97%90%EB%9F%AC)

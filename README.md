# 실전형 리액트 Hooks 연습하기

[실전형 리액트 Hooks 10개 강의](https://nomadcoders.co/react-hooks-introduction)를 듣고 리액트 훅 사용법을 익힙니다.

## ✅ TODO

### useState

- [x] `useInput` : Input과 동일
- [x] `useTabs` : Button Tab의 순서에 따라 보이는 Item을 변경

### useEffect

- [ ] `useTitle` : 리액트 Document의 제목을 변경
- [ ] `usePageLeave` : 사용자가 페이지를 벗어나는 시점을 감지
- [ ] `useClick` : element를 클릭하는 시점을 감지
- [ ] `useFadeIn` : element가 안으로 서서히 사라지게 함
- [ ] `useFullscreen` : element를 풀스크린 혹은 일반화면으로 바꿈
- [ ] `useHover` : element 위에 마우스를 올렸는지 감지
- [ ] `useNetwork` : 온라인인지 오프라인인지 감지
- [ ] `useNotification` : Notification API를 사용해 사용자에게 알림을 보냄
- [ ] `useScroll` : 사용자가 스크롤을 사용할 때를 감지
- [ ] `usePreventLeave` : 사용자가 변경사항을 저장하지 않고 페이지를 벗어나려 할 때 확인 여부를 띄움
- [ ] `useConfirm` :
- [ ] `useAxios` : HTTP requests client axios를 위한 wrapper

## 📝 공부 일지

### # 1. USESTATE

- 리액트 훅은 리액트 state 머신에 연결하는 기본적인 방법이다.
  - 코드를 더 간결하게 만들어준다.
  - 더이상 클래스를 사용하지 않고 모든 것을 함수형 프로그래밍으로 할 수 있다.
- `useState`는 항상 2개의 value를 반환한다.
  - **첫 번째 value**는 변경할 state이다.
  - **두 번째 value**는 state 값을 변경시키는 `setState`와 같은 함수이다.
  - `useState`는 매개변수로 state의 초기값을 설정할 수 있다.
- `useState`가 반환하는 value의 Naming Convention은 `[ item, setItem]`과 같다.
- 컴포넌트로 전달해야할 props가 한 객체에 있을 때 Destructuring `{...ObjectExample}`을 사용하자.

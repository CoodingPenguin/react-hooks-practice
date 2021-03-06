<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/coodingpenguin/react-hooks-practice">
    <img src="logo.png" alt="Logo" width="128" height="128">
  </a>
  <h3>React Hooks Practice</h3>
  <small>직접 만들며 배우는 React Hook</small>
</div>

## 📝 목차

- `useInput` : 사용자 입력 받기
- `useTabs` : Button Tab의 순서에 따라 보이는 Item을 변경
- `useTitle` : Helmet 대신 Document의 제목을 변경
- `useClick` : element를 클릭하는 시점을 감지
- `useBeforeLeave` : 사용자가 페이지를 벗어나는 시점을 감지
- `useFadeIn` : element가 안으로 서서히 사라지게 함
- `useNetwork` : 온라인인지 오프라인인지 감지
- `useScroll` : 사용자가 스크롤을 사용할 때를 감지
- `useFullscreen` : element를 풀스크린 혹은 일반화면으로 바꿈
- `useAxios` : HTTP requests client axios를 위한 wrapper
- `useConfirm` : 사용자가 하려는 동작의 확인 여부를 띄움
- `usePreventLeave` : 사용자가 변경사항을 저장하지 않고 페이지를 벗어나려 할 때 확인 여부를 띄움
- `useNotification` : Notification API를 사용해 사용자에게 알림을 보냄

## ✅ 공부일지

<details markdown="1">
<summary><strong><a href="https://nomadcoders.co/react-hooks-introduction">노마드코더 실전형 리액트 Hooks 10개 강의</a> 내용 정리</strong></summary>

### useState

- 리액트 훅은 리액트 state 머신에 연결하는 기본적인 방법이다.
  - 코드를 더 간결하게 만들어준다.
  - 더이상 클래스를 사용하지 않고 모든 것을 함수형 프로그래밍으로 할 수 있다.
- `useState`는 항상 2개의 value를 반환한다.
  - **첫 번째 value**는 변경할 state이다.
  - **두 번째 value**는 state 값을 변경시키는 `setState`와 같은 함수이다.
  - `useState`는 매개변수로 state의 초기값을 설정할 수 있다.
- `useState`가 반환하는 value의 Naming Convention은 `[ item, setItem]`과 같다.
- 컴포넌트로 전달해야할 props가 한 객체에 있을 때 Destructuring `{...ObjectExample}`을 사용하자.
- 기존 클래스형 컴포넌트와 똑같으므로 `useState`로 생성한 state의 값이 변경되면 화면이 다시 렌더링된다.

### useEffect

- `useEffect`는 `componentDidMount`, `componentWillUpdate`, `componentWillUnmount`와 똑같다. 그래서 페이지가 새로고침되거나 state가 Update되서 다시 화면을 렌더링해야할 때 실행된다.
- `useEffect`는 2개의 매개변수를 받고 1개의 함수를 반환한다. 이 때 반환하는 함수는 `componentWillUnmount`이다.
  - **첫 번째 매개변수**는 effect로서의 함수이다.
  - **두 번째 매개변수**는 첫 번째 매개변수로 받은 함수를 trigger시킬 수 있는 값들의 리스트이다. (= dependency)
  - 아무 것도 반응하게 만들고 싶지 않다면 `[]` 빈 배열을 넘겨주면 된다. 그럼 딱 한 번만 effect 함수가 실행되고 더이상 실행되지 않는다.
- 즉, 두 번째 매개변수로 받은 리스트의 값들이 변경되면 첫 번째 매개변수의 함수가 실행된다. `useEffect`는 `deps`로 받은 것들의 값이 변화했는지 감지하여 변경되었다면 인자로 받은 `func`를 실행시킨다.
- 첫 매개변수로 넣어준 함수는 `useEffect`가 componentDidMount되었을 때 호출되고, componentWillUnMount될 때 첫 번째 매개변수의 함수가 반환하는 함수를 실행시켜준다.
- eventListener를 사용하는 경우 return에 eventListener를 제거하는 함수를 넣어준다.

### useRef

- `useRef`는 `document.getElementById()`와 같이 컴포넌트의 어떤 부분을 선택할 수 있는 함수이다.
- 리액트의 모든 컴포넌트는 reference prop을 가지고 있어 이 prop을 가지고 컴포넌트를 참조를 할 수 있다. 즉, 참조하여 컴포넌트를 변경할 수 있다.
- `useRef`를 사용하여 컴포넌트 혹은 HTML element를 참조하여 `useEffect`가 실행되는 경우마다 참조한 컴포넌트 혹은 element를 변경시키는 식으로 사용할 수 있다.

</details>

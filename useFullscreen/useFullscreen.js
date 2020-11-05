// callback : 풀스크린 여부가 변할 때마다 호출할 콜백 함수
export const useFullscreen = (callback) => {
  const element = useRef();
  const runCallback = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  // 풀스크린일 때 호출
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      runCallback(true);
    }
  };
  // 일반화면으로 돌아갈 때 호출
  const exitFullScreen = () => {
    document.exitFullscreen();
    runCallback(false);
  };
  return { element, triggerFull, exitFullScreen };
};

// onClick  : 컴포넌트 클릭 시 호출할 함수
export const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }

  // 컴포넌트 참조
  const element = useRef();

  useEffect(() => {
    // 참조된 컴포넌트가 DidMount되면 실행
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    // 참조된 컴포넌트가 UnMount되면 실해
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

// duration : 애니메이션 재생 시간 (초)
// delay    : 애니메이션 지연 시간 (초)
export const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    // 참조한 element가 존재한다면
    if (element.current) {
      const { current } = element;
      // 다음의 css 스타일을 적용한다.
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

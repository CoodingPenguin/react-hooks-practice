export const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  // 실제 스크롤 위치를 찾아 state에 저장
  const onScroll = (event) => {
    setState({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
};

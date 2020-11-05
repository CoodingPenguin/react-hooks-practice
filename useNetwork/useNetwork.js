// onChange : 네트워크가 변경되면 호출할 함수
export const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine || true);
  const handleChange = () => {
    // onChange 함수에 온라인/오프라인 여부를 넘겨준다.
    if (onChange && typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

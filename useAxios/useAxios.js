import defaultAxios from "axios";
import { useState, useEffect } from "react";

// options  : axios 인스턴스 설정
// axiosInstance    : 사용할 axios 인스턴스
export const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  if (!options.url) {
    return;
  }

  // 다시 로드하기 위해 trigger 값 변경
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  // 마운트 될 때와 trigger값이 업데이트 될 때 실행
  useEffect(() => {
    axiosInstance(options)
      // 데이터를 받아 state에 저장
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      // 에러가 있다면 error state에 저장
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);

  return { ...state, refetch };
};

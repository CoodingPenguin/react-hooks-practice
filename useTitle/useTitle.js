// initialTitle : 초기에 설정할 title 값
export const useTitle = (initialTitle) => {
    // title 관련 state 생성
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerText = title;
    };
    // title state의 값이 변화할 때마다 updateTitle로 <title> 값 변경
    useEffect(updateTitle, [title]);
    return setTitle;
  };
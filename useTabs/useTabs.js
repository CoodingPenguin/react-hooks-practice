// initialTab   : 초기에 누름으로 설정할 Tab의 인덱스 값
// allTabs      : Tab으로 이루어진 배열
export const useTabs = (initialTab, allTabs) => {
    // allTabs를 입력받지 않았다면 종료시킨다.
    if (!allTabs || !Array.isArray(allTabs)) {
      return;
    }
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex
    };
  };
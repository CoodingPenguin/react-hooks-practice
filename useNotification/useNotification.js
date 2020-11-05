// title    : Notification 제목
// option   : 그 외 추가 설정 사항 (문서 참고)
export const useNotification = (title, option) => {
  if (!("Notification" in window)) {
    return;
  }
  const triggerNotification = () => {
    // 허용을 하지 않았다면 허용 요청
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, option);
        } else {
          return;
        }
      });
      // 허용을 받았다면 Notification 객체 생성
    } else {
      new Notification(title, option);
    }
  };
  return triggerNotification;
};

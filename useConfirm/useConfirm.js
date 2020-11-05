// message      : 확인창에 띄울 메시지
// onConfirm    : 확인을 눌렀을 때 호출할 함수
// onCancel     : 취소를 눌렀을 때 호출할 함수
export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (confirm(message)) {
      // 확인 버튼 클릭
      onConfirm();
    } else {
      // 취소 버튼 클릭
      onCancel();
    }
  };

  return confirmAction;
};

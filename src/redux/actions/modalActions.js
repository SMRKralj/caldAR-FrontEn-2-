import { SHOW_MODAL, HIDE_MODAL } from "../types/modalActionsTypes";

export const showModal = (modalType, meta = {}) => {
  return {
    type: SHOW_MODAL,
    modalType,
    meta,
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  };
};

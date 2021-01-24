import { SHOW_MODAL, HIDE_MODAL } from "../types/modalActionsTypes";

export const initialState = {
  show: false,
  modalType: null,
  meta: {},
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: true,
        modalType: action.modalType,
        meta: action.meta,
      };
    case HIDE_MODAL:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};
export default modalReducer;

import { notificationPrompActionTypes } from "./notification-promp.types";

const INITIAL_STATE = {
  notificationPromp: {
    display: false,
    callback: () => { }
  }
};

const notificationPrompReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case notificationPrompActionTypes.SET_NOTIFICATION_PROMP_DISPLAY:
      return {
        ...state,
        notificationPromp: action.payload
      };
    case notificationPrompActionTypes.CALL_NOTIFICATION_PROMP_CALLBACK:
      state.notificationPromp.callback();
      return { ...state }
    default:
      return state;
  }
};

export default notificationPrompReducer;

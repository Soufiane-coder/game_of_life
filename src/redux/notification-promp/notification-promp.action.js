import { notificationPrompActionTypes } from "./notification-promp.types";

export const setNotificationPrompState = (stateShow) => ({
  type: notificationPrompActionTypes.SET_NOTIFICATION_PROMP_DISPLAY,
  payload: stateShow,
});

export const callNotificationPrompCallback = () => ({
  type: notificationPrompActionTypes.CALL_NOTIFICATION_PROMP_CALLBACK,
  payload: null,
});



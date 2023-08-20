import { createSelector } from "reselect";

const selectNotificationPrompState = (state) => state.notificationPromp;

export const selectCurrentNotificationPrompState = createSelector(
  [selectNotificationPrompState],
  (notificationPromp) => notificationPromp.notificationPromp
);

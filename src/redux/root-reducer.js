import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import routinesReducer from "./routines/routines.reducer";
import displayModeReducer from './display-mode/display-mode.reducer';
import notificationPrompReducer from "./notification-promp/notification-promp.reducer";
import popupReducer from "./popup/popup.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "displayMode", "routines"],
};

const rootReducer = combineReducers({
  user: userReducer,
  routines: routinesReducer,
  displayMode: displayModeReducer,
  notificationPromp: notificationPrompReducer,
  popup: popupReducer,
});

export default persistReducer(persistConfig, rootReducer);

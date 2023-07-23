import { DisplayModeActionTypes } from "./display-mode.types";
import {displayModes} from '../../enums/displayModes';

const INITIAL_STATE = {
  displayMode: displayModes.dark,
};

const displayModeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DisplayModeActionTypes.SET_DISPLAY_MODE:
      return {
        ...state,
        displayMode: action.payload
      };
    default:
      return state;
  }
};

export default displayModeReducer;

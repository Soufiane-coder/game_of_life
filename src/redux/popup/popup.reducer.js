

const INITIAL_STATE = {
  popup: ''
};

const popupReducer = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    popup: action.payload === 'persist/REHYDRATE' ? action.type : ''
  };
};

export default popupReducer;

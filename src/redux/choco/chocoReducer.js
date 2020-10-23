import { BUY_CHOCO } from './chocoTypes';

const initialState = {
  numOfChocos: 30,
};

const chocosReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CHOCO:
      return {
        ...state,
        numOfChocos: state.numOfChocos - action.payload,
      };
    default:
      return state;
  }
};

export default chocosReducer;

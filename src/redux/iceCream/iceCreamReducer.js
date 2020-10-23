import { BUY_ICECREAM } from './iceCreamTypes';

const initialState = {
  numOfIceCreams: 20,
};

const iceCreamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

export default iceCreamsReducer;

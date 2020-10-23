import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import chocoReducer from './choco/chocoReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  choco: chocoReducer,
});

export default rootReducer;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';

function HookIceCreamContainer() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Total Ice Creams = {numOfIceCreams}</p>
      <button type="button" onClick={() => dispatch(buyIceCream())}>
        Buy Ice Cream
      </button>
    </div>
  );
}

export default HookIceCreamContainer;

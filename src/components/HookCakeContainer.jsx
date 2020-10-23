import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function HookCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Total Cakes = {numOfCakes}</p>
      <button type="button" onClick={() => dispatch(buyCake())}>
        Buy Cake
      </button>
    </div>
  );
}

export default HookCakeContainer;

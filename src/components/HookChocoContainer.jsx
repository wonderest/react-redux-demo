import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyChoco } from '../redux';

function HookChocoContainer() {
  const numOfChocos = useSelector((state) => state.choco.numOfChocos);
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Total Chocos ={numOfChocos}</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button type="button" onClick={() => dispatch(buyChoco(number))}>
        Buy {number} Chocos
      </button>
    </div>
  );
}

export default HookChocoContainer;

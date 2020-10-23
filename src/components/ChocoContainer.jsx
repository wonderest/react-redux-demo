import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyChoco } from '../redux';

const ChocoContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <p>Total Chocos ={props.numOfChocos}</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button type="button" onClick={() => props.buyChoco(number)}>
        Buy {number} Chocos
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  numOfChocos: state.choco.numOfChocos,
});
const mapDispatchToProps = (dispatch) => ({
  buyChoco: (number) => {
    dispatch(buyChoco(number));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ChocoContainer);

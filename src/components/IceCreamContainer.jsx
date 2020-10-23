import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

const IceCreamContainer = (props) => (
  <div>
    <p>Total Ice Creams = {props.numOfIceCreams}</p>
    <button type="button" onClick={props.buyIceCream}>
      Buy Ice Cream
    </button>
  </div>
);
const mapStateToProps = (state) => ({
  numOfIceCreams: state.iceCream.numOfIceCreams,
});
const mapDispatchToProps = (dispatch) => ({
  buyIceCream: () => {
    dispatch(buyIceCream());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);

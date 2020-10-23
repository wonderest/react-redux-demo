import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const CakeContainer = (props) => (
  <div>
    <p>Total Cakes = {props.numOfCakes}</p>
    <button type="button" onClick={props.buyCake}>
      Buy Cake
    </button>
  </div>
);
const mapStateToProps = (state) => ({
  numOfCakes: state.cake.numOfCakes,
});
const mapDispatchToProps = (dispatch) => ({
  buyCake: () => {
    dispatch(buyCake());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import HookCakeContainer from './components/HookCakeContainer';
import HookIceCreamContainer from './components/HookIceCreamContainer';
import HookChocoContainer from './components/HookChocoContainer';
import CakeContanier from './components/CakeContanier';
import IceCreamContainer from './components/IceCreamContainer';
import ChocoContainer from './components/ChocoContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hooks</h1>
        <hr />
        <HookCakeContainer />
        <HookIceCreamContainer />
        <HookChocoContainer />
        <br />
        <h1>Without Hooks</h1>
        <hr />
        <CakeContanier />
        <IceCreamContainer />
        <ChocoContainer />
      </div>
    </Provider>
  );
}

export default App;

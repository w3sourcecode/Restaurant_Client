import React, { Fragment } from "react";
import { Provider } from "react-redux";

// store
import store from './src/_redux/store';
// navigator
import Navigator from './src/_navigator/';

console.disableYellowBox = true;

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </>
  );
}


  export default App;

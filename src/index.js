import React from 'react';
import { render } from 'react-dom';
import './index.css';
import HomePage from './Components/Home/HomePage';
import * as serviceWorker from './serviceWorker';
import configureStore from "./Redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <HomePage />
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

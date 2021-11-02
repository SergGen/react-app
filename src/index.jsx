import React from 'react';
import ReactDOM from 'react-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import {App} from './App';
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import {PersistGate} from "reduxjs-toolkit-persist/integration/react";
import {CircularProgress} from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<CircularProgress />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
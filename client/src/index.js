import React from 'react';
import './index.css';
import App from './App';
import * as ReactDOM from "react-dom";
import {SnackbarProvider} from "notistack";

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <App/>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


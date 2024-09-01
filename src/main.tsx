import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import {BrowserRouter} from "react-router-dom";
import {setupStore} from "./redux/store";
import {Provider} from "react-redux";

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
)

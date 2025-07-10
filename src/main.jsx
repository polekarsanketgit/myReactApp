import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './utils/store';


import './styles/index.css'
import App from './App.jsx'

const root = document.getElementById("root");

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <Provider store={store}>
    <App /> 
  </Provider>    
  //</StrictMode>,
)

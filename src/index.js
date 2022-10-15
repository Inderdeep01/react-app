import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/rootReducer'

const store = createStore(rootReducer)
store.subscribe(()=>{
  console.log(store.getState())
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


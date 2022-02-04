import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import {createStore, combineReducers} from 'redux';

let alert초기값 = true;

function reducer2(state = alert초기값, act) {
  let copy = alert초기값
  if (act.type === 'alert닫기'){
    return false
  }else{
    return state
  }
}


let 초기값 = [
  { id:0, name:'shoes1',quan:1},
  { id:1, name:'shoes2',quan:2}
]

function reducer(state = 초기값, act) {
  let copy = [...state];
  if (act.type === '수량증가0'){
    copy[0].quan++;
    return copy

  } else if (act.type === '수량감소0') {
    copy[0].quan--;
    return copy
  } else{
    return state
  }
}

let store = createStore( combineReducers({reducer,reducer2}) );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import {BrowserRouter} from 'react-router-dom';
import rootReducer from "./Reducers/reducer";
import {database} from "./config";

const store = createStore(rootReducer,applyMiddleware(thunk));


ReactDOM.render(
<Provider store={store}>    
<BrowserRouter><Main /></BrowserRouter>
</Provider>
, document.getElementById('root'));


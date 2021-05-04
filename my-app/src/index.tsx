import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './components/App';
import authReducer from './store/reducers/authReducer';
import rootSaga from './store/sagas';

import toolsReducer from './store/reducers/toolsReducer';
import { BrowserRouter } from 'react-router-dom';

import { composeWithDevTools } from 'redux-devtools-extension';
import paintReducer from './store/reducers/paintReducer';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    auth: authReducer,
    tools: toolsReducer,
    paint: paintReducer,
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
// sagaMiddleware.run(sagaWatcherPainting);

ReactDOM.render(<Provider store={store}>

  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>, document.getElementById('root'));




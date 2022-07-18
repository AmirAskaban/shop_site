import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducers from './reducers';
import { createLogger } from 'redux-logger';

const middleware = [];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

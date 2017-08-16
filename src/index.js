import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './store/configStore'
import { Provider } from 'react-redux';
import './index.css'
import App from './components/App';
import { loadJobs } from './actions/jobActions'
import registerServiceWorker from './registerServiceWorker';

const store = configStore()

store.dispatch(loadJobs());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

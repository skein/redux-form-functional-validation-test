import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers } from 'redux';


const rootReduser = combineReducers({
    form: formReducer
});
const store = createStore(rootReduser);

ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

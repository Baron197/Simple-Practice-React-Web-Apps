import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './supports/css/bootstrap.min.css';
import './supports/css/agency.min.css';
import './supports/font-awesome/css/font-awesome.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
document.getElementById('root'));

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configureFakeBackend, store } from './helpers';
import { App } from './components';
import * as serviceWorker from './serviceWorker';

configureFakeBackend();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);

serviceWorker.unregister();

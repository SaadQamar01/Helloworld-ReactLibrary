import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import HelloLib from 'reactlibrary';

ReactDOM.render(<HelloLib />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//react routeur
import {BrowserRouter as Router } from 'react-router-dom';

//import bootstrap
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//import styles
import './styles/main.min.css';



ReactDOM.render(

<Router>
    <App />
</Router>



, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

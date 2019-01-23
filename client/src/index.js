import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import routing for application
import CustomRoutes from './customRoute';


//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CustomRoutes />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap';
import 'jquery';
import 'popper.js';



var counter = 0;
setInterval(function () {
  const six = Math.floor(counter/100000);
  const five = Math.floor(counter/10000);
  const four = Math.floor(counter/1000);
  const three = Math.floor(counter/100);
  const two = Math.floor(counter/10);
  const one = Math.floor(counter/1);
  counter++;


ReactDOM.render(
  <React.StrictMode>
    <App 
    firstDigit={one}
    secondDigit={two}
    thirdDigit={three}
    fourthDigit={four}
    fifthDigit={five}
    sixthDigit={six}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
}, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

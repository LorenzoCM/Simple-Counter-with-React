import React from 'react';
import './App.css';
import './index.js';
import PropType from 'prop-types';

function App (props) {
  return (
    <div className="container text-center">
      <div className="clockContainer">
        <div className="clock">
        <i className="far fa-clock"></i>
        </div>
        <div className="number">
          <p>{props.sixthDigit % 10}</p>
        </div>
        <div className="number">
          <p>{props.fifthDigit % 10}</p>
        </div>
        <div className="number">
          <p>{props.fourthDigit % 10}</p>
        </div>
        <div className="number">
          <p>{props.thirdDigit % 10}</p>
        </div>
        <div className="number">
          <p>{props.secondDigit % 10}</p>
        </div>
        <div className="number">
          <p>{props.firstDigit % 10}</p>
        </div>
      </div>
      <div>
        <button className="btn btn-primary mt-4">Reset</button>
      </div>
    </div>
  );
}

App.propTypes = {
    sixthDigit: PropType.number,
    fifthDigit: PropType.number,
    fourthDigit: PropType.number,
    thirdDigit: PropType.number,
    secondDigit: PropType.number,
    firstDigit: PropType.number
}


export default App;

import React, { useContext } from 'react';
import '../Counter.css'; // Importing the CSS file for styling
import { CounterContext } from '../context/CounterContext';

const Counter = () => {
    const context = useContext(CounterContext);
    const { increaseCount, count } = context;

    return (
        <div className="counter-container">
            <h1 className="counter-title">Counter: {count}</h1>
            <div className="button-container">
                <button className="counter-button" onClick={increaseCount}>
                    Increment
                </button>
            </div>
        </div>
    );
};

export default Counter;

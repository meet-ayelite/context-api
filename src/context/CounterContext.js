import React, { createContext, useState } from 'react';

// Create a Context for login info
export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    
    const increaseCount = () => {
        setCount(prev => prev + 1);
    }
    
    return (
        <CounterContext.Provider value={{ count, increaseCount }}>
            {children}
        </CounterContext.Provider>
    );
};

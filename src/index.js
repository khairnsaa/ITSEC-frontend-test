import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LoginContextProvider } from './context/LoginContext';
import { TempContextProvider } from './context/TempContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TempContextProvider>
        <LoginContextProvider>
            <App />
        </LoginContextProvider>
    </TempContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

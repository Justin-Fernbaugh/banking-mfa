import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1>BANKFORD BANK</h1>
      <div id="buttonContainer">
          <a href="/">
              <button>HOME</button>
          </a>
          <a href="/accounts">
              <button>ACCOUNTS</button>
          </a>
          <a href="/auth">
              <button>AUTH</button>
          </a>
      </div>
    </div>
    <App/>
    <div id="footer">
      <p>Bankford Bank 2024
        <br></br>
        <br></br>
        Justin Fernbaugh | Marc Brophy
      </p>
    </div>
  </React.StrictMode>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

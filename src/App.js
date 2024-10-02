import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [cookies, setCookies] = useState(0);      
  const [cookiesPerClick, setCookiesPerClick] = useState(1);
  const [upgradeCost, setUpgradeCost] = useState(10);

  const CookieClick = () => {
    setCookies(cookies + cookiesPerClick);
  };

  const buyUpgrade = () => {
    if (cookies >= upgradeCost) {
      setCookies(cookies - upgradeCost);             
      setCookiesPerClick(cookiesPerClick + 1);       
      setUpgradeCost(Math.floor(upgradeCost * 1.5)); 
    } else {
      alert('Not enough cookies');
    }
  };

  return (
    <div className="App">
      <h1>Cookie Clicker</h1>
      <p>Cookies: {cookies}</p>
      <p>Cookies per Click: {cookiesPerClick}</p>
      <CookieClicker CookieClick={CookieClick} />
      <Upgrades buyUpgrade={buyUpgrade} upgradeCost={upgradeCost} />
    </div>
  );
};


const CookieClicker = ({CookieClick }) => {
  return (
    <div>
      <button className="cookieBtn" onClick={CookieClick}>
        Click Me
      </button>
    </div>
  );
};

const Upgrades = ({ buyUpgrade, upgradeCost }) => {
  return (
    <div>
      <h2>Upgrades</h2>
      <button className="upgradeBtn" onClick={buyUpgrade}>
        Buy Upgrade (+1 Cookies per Click) - Cost: {upgradeCost} Cookies
      </button>
    </div>
  );
};

export default App;

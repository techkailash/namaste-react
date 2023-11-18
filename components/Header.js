import { useState } from 'react';
import User from './User';
import { Link } from 'react-router-dom';

const Header = () => {
  const [loginButtonText, setLoginButtonText] = useState("Login");

  const onLoginButtonClick = () => {
    loginButtonText=="Login"?setLoginButtonText("Logout"): setLoginButtonText("Login");
  }

  console.log('header render');

  return (
    <div className="header">
      <div className="logo-div">
        <img
          className="logo"
          src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp"
        />
      </div>
      <div className="menu">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link> </li>
          <li><Link to='/lazy'>Contact</Link></li>
          <li><button onClick={onLoginButtonClick}>{loginButtonText}</button></li>
          <li><User /></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

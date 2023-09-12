import { useState } from "react";

const Title = () => {
  //   return <h1 id="title">Mega Meals</h1>;
  return (
    <a href="/">
      <img
        className="logo"
        alt="Mega Meals"
        src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...ODpBFMkRvFwXs1M3EMoAJtlikuhvFs...fgy "
      />
    </a>
  );
};

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      <div>
        {loggedIn ? (
          <button onClick={() => setLoggedIn(false)}>Log Out</button>
        ) : (
          <button onClick={() => setLoggedIn(true)}>Log In</button>
        )}
      </div>
    </div>
  );
};

export default Header;

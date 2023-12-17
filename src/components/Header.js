import { useState } from "react"
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"

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
  )
}

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const isOnline = useOnline()

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1>{isOnline ? "✅" : "🔴"}</h1>
        {loggedIn ? (
          <button onClick={() => setLoggedIn(false)}>Log Out</button>
        ) : (
          <button onClick={() => setLoggedIn(true)}>Log In</button>
        )}
      </div>
    </div>
  )
}

export default Header

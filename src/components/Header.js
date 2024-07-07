import { useState } from "react"
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"
import { useSelector } from "react-redux"

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

  const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className="flex justify-between shadow-lg p-2 m-2">
      <Title />
      <div>
        <ul className="flex py-10">
          <li className="px-2 font-bold hover:text-red-800">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 font-bold hover:text-red-800">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 font-bold hover:text-red-800">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2 font-bold hover:text-red-800">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2 font-bold hover:text-red-800">
            Cart - {cartItems.length}
          </li>
        </ul>
      </div>
      <div className="py-10">
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

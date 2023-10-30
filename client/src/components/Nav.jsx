import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <div>
    <nav className="bg-neutral-200 dark:white">

        <NavLink to="/">Home</NavLink>
        <NavLink to="/signin">Sign in</NavLink>
        <NavLink to="/register">Sign up</NavLink>
        <NavLink to="/chat">Chat</NavLink>

    </nav>
    </div>
  )
}

export default Nav
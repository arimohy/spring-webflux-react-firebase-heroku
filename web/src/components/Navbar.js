import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logoyhomira2.png'



export const PublicNavbar = () => (
  <nav>
    <section>
      <Link to="/">
      <img  className="logo" src={Logo} />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
      <Link className="nav-item mr-3 btn btn-outline-light px-4" to={"/login"}>
          Log In <i className="bi bi-box-arrow-right" />
      </Link>
      <Link className="nav-item mr-3 btn btn-outline-light px-4" to={"/register"}>
          Log up <i className="bi bi-box-arrow-right" />
      </Link>
      
    </section>
  </nav>
)

export const PrivateNavbar = () => (
  <nav>
    <section>
      <Link to="/">
      <img className="logo"  src={Logo} />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/new">New</Link>
      <Link to="/list">List</Link>
    </section>
  </nav>
)

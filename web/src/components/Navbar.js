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

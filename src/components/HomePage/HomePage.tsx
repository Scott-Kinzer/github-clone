import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
        <h2>Hello nice to meet you</h2>

        <NavLink to="login"><button>LOGIN</button></NavLink>
        <NavLink to="register"><button>REGISTER</button></NavLink>

    </div>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import HocWelcome from '../HocWelcome/HocWelcome';

import s from './homepage.module.css';

 function HomePage() {
  return (
    <>
              <div className={s.btnsWrapper}>
                <NavLink to="login"><button className={s.btnForm}>LOGIN</button></NavLink>
                <NavLink to="register"><button className={s.btnForm}>REGISTER</button></NavLink>
              </div>
    </>
    
  )
}

export default HocWelcome(HomePage);

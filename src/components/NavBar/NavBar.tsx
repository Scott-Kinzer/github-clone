import { IconName } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useMemo, useState } from 'react'

import s from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { NavLink } from 'react-router-dom';


export default function NavBar() {

  const user = useSelector((state: RootState)  => state.userState.user);

  const [userQuery, setUser] = useState('');
  const [usersBySearch, setUsersBySearch] = useState<any[]>([]);

 

  useEffect(() => {
     if (userQuery) {
      fetch(`https://api.github.com/search/users?q=${userQuery}`).then(users => users.json()).
      then(data => {        
        setUsersBySearch(data.items);
      }).catch((e) => {
        setUsersBySearch([])
      })
     }
  }, [userQuery])

  return (
    <div className={s.header}>
  
     <div style={{display: 'flex', alignItems: 'center'}}>
     <FontAwesomeIcon icon={faCoffee} />
        <div style={{marginLeft: '5px'}}>
       <NavLink style={{color: 'white'}} to="/"> GITHUB CLONE</NavLink>
    </div>

    {user.accessToken && 
      <div className={s.wrapperInput}>
      <input onBlur={() => setUser('')} placeholder='Find users' type="text" value={userQuery} onChange={(e) => setUser(e.currentTarget.value)}/>

        {!!userQuery.length && 
        <div className={s.usersSearch}>
  
            {usersBySearch.map((item) => {

              return (
                <NavLink to={`user/${item.login}/details`}>
                  <div onMouseDown={(e) => e.preventDefault()} className={s.itemWrap}>
                  {item.avatar_url ? <img className={s.image} src={item.avatar_url} />: ''}
                  <div>{item.login}</div>
                </div>
                </ NavLink>

              )
            })}

        </div>
        }
      </div>
    }
     </div>

     {user.email ? <div>{user.email}</div> : <div></div>}
    
      </div>
  )
}

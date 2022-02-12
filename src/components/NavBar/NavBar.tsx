import { IconName } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useMemo, useState } from 'react'

import s from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


export default function NavBar() {

  const user = useSelector((state: RootState)  => state.userState.user);

  const [userQuery, setUser] = useState('');
  const [usersBySearch, setUsersBySearch] = useState([]);

 

  useEffect(() => {
     if (userQuery) {
      fetch(`https://api.github.com/search/users?q=${userQuery}`).then(users => users.json()).
      then(data => {
        console.log(data);
        setUsersBySearch(data.items);
      });
     }
  }, [userQuery])

  return (
    <div className={s.header}>
  
     <div style={{display: 'flex', alignItems: 'center'}}>
     <FontAwesomeIcon icon={faCoffee} />
        <div style={{marginLeft: '5px'}}>
        GITHUB CLONE
    </div>

    {user.accessToken && 
      <div className={s.wrapperInput}>
      <input placeholder='Find users' type="text" value={userQuery} onChange={(e) => setUser(e.currentTarget.value)}/>

        {!!userQuery.length && 
        <div className={s.usersSearch}>
            {usersBySearch.map(item => <div>USER</div>)}

        </div>
        }
      </div>
    }
     </div>

     {user.email ? <div>{user.email}</div> : <div></div>}
    
      </div>
  )
}

import React, { useEffect, useState } from 'react'
import RepoItem from '../RepoItem/RepoItem';


import s from './profilepage.module.css';

export default function ProfilePage({user}) {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${user.login}/repos`).then(data=> data.json())
        .then(setRepos);
    }, [])


  return (

    <ProfileSubWrapper user={user} repos={repos} />
  )
}

export function ProfileSubWrapper ({user, repos}) {
    console.log(user);
    return (

        <div className={s.profileWrapper}>

        <div className={s.leftSideDescription}>
            <img src={user.avatar_url} alt="" />
            <div>{user.name}</div>
            <div>{user.login}</div>

            {/* <div>
                <div className={s.folowingWrapper}>
                    <div>folowers</div>
                    <div>folowing</div>
                </div>
                
            </div> */}

            <div>{user.location}</div>
            <div>{user.blog}</div>
          

        </div>
        

        <div className={s.rightSide}>
            <h2>Repos</h2>
            <div className={s.mainSideDescription}>
            {repos.map((repo) => {
                    return <RepoItem repo={repo} />
                })}
            </div>
                
        </div>
    </div>

    )
}
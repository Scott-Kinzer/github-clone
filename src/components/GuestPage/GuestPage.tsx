import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProfilePage, { ProfileSubWrapper } from '../ProfilePage/ProfilePage';

export default function GuestPage() {

    const {name} = useParams();
    console.log(name);
    const [repos, setRepos] = useState(null);
    const [usersDetails, setUser] = useState(null);

  useEffect(() => {
        fetch(`https://api.github.com/users/${name}`).then(data => data.json())
        .then(setUser);
  }, [name]);

  useEffect(() => {
      fetch(`https://api.github.com/users/${name}/repos`).then(data=> data.json())
      .then(setRepos);
  }, [name])


  return (
    <>
    {repos && usersDetails && <ProfileSubWrapper user={usersDetails} repos={repos} />}

    </>
  )
}

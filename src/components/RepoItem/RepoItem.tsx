import React from 'react'

import s from './repoitem.module.css';

export default function RepoItem({repo}: any) {
  return (
    <div className={s.wrapperRepo}>
        
        <div>{repo.name}</div>
    </div>
  )
}

import React, { useState } from 'react'

import s from './form.module.css'

interface IFormProps {
    login?: string;
    handleF: (name: string,email: string, password: string) => void;
}

export default function Form(props: IFormProps) {

    const [name, setGithubName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");


  return (
    <div className={s.formWrap}>

        {props.login &&
        <>
            <h2>LOGIN</h2>
            <input type="text" placeholder='Enter github name' value={name} onChange={(e) => setGithubName(e.currentTarget.value)} />
            <input type="text" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
            <input type="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
            <button  className={s.btnForm} onClick={() => props.handleF(name, email, password)}>LOGIN</button>
        </>}

        {!props.login &&
        <>
            <h2>REGISTER</h2>
            <input type="text" placeholder='Enter github name' value={name} onChange={(e) => setGithubName(e.currentTarget.value)} />
            <input type="text" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
            <input type="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
            <input type="password" placeholder='Repeat password' value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.currentTarget.value)} />

            <button className={s.btnForm} disabled={password !== passwordRepeat } onClick={() => props.handleF(name ,email, password)}>REGISTER</button>
        </>}
        
    </div>
  )
}

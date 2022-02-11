import React, { useState } from 'react'


interface IFormProps {
    login?: string;
    handleF: (email: string, password: string) => void;
}

export default function Form(props: IFormProps) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div>

        {!props.login &&
        <>
            <h2>Form</h2>
            <input type="text" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
            <input type="text" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
            <button onClick={() => props.handleF(email, password)}>REGISTER</button>
        </>}
        
    </div>
  )
}

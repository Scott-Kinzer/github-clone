import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from '../../store/store';
import Form from '../Form/Form';
import { fetchAuthUser, setUser } from '../../store/features/user/UserSlice';
import { useNavigate } from 'react-router-dom';
import HocWelcome from '../HocWelcome/HocWelcome';



function RegisterPage() {

    const dispatch = useAppDispatch();
    
    const navigate = useNavigate();
    const [error, setError] = useState(null);


  const registerLogin = (name: string ,email:string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email , password)
    .then((userCredential) => {
      const user = userCredential.user;
      user.getIdToken()
                .then(token => dispatch(setUser({email: user.email , uid: user.uid, accessToken: token,}))).
                then(() => {
                    dispatch(fetchAuthUser(name.toLowerCase()));

                }).then(() => {
                  navigate('/main');
                }).catch((e) => {
                  setError(e.message)
                })

    })
    .catch((error) => {
      setError(error.message);

    });
  }

  return (
    <div>
      {
        error && <div>{error}</div>
      }
            <Form handleF={registerLogin} />

    </div>
  )
}

export default HocWelcome(RegisterPage);
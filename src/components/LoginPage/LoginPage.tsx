import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword,  } from "firebase/auth";
import { useAppDispatch } from '../../store/store';
import Form from '../Form/Form';
import { fetchAuthUser, setUser } from '../../store/features/user/UserSlice';
import HocWelcome from '../HocWelcome/HocWelcome';
import { useNavigate } from 'react-router-dom';



function LoginPage() {

  const dispatch = useAppDispatch();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const registerLogin = (name:string, email:string, password: string) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          user.getIdToken()
          .then(token => dispatch(setUser({email: user.email , uid: user.uid, accessToken: token,}))).
          then(() => {
              dispatch(fetchAuthUser(name.toLowerCase()));
          }).then(() => {
            navigate('/main');
          })        }).catch((e) => {
            setError(e.message)
          })
          
        .catch((error) => {
          setError(error.message);
          setTimeout(() => { setError(null) }, 2000)
        });
  }

  return (
    <div> 
      {
        error && <div>{error}</div>
      }
            <Form handleF={registerLogin} login={"login"} />

    </div>
  )
}

export default HocWelcome(LoginPage);
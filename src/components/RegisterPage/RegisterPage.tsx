import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from '../../store/store';
import Form from '../Form/Form';
import { setUser } from '../../store/features/user/UserSlice';
import { useNavigate } from 'react-router-dom';



function RegisterPage() {

    const dispatch = useAppDispatch();
    
    const navigate = useNavigate();
    

  const registerLogin = (email:string, password: string) => {

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email , password)
    .then((userCredential) => {
      const user = userCredential.user;
      user.getIdToken()
                .then(token => dispatch(setUser({email: user.email , uid: user.uid, accessToken: token,}))).
                then(() => {
                    navigate('/main');
                })

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  return (
    <div>

        <div>
            <Form handleF={registerLogin} />
        </div>
    </div>
  )
}

export default RegisterPage
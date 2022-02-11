import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from '../../store/store';
import Form from '../Form/Form';
import { setUser } from '../../store/features/user/UserSlice';



function LoginPage() {

  const dispatch = useAppDispatch();
    
  const registerLogin = (email:string, password: string) => {
      console.log('click');
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email , password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      console.log(userCredential)

        dispatch(setUser({email:user.email , uid: user.uid, accessToken: user.refreshToken,}));

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  return (
    <div>

        <div>
            <Form handleF={registerLogin} login={"login"} />
        </div>
    </div>
  )
}

export default LoginPage;
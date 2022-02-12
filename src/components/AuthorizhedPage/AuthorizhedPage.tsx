import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {RootState} from  '../../store/store';
import { useNavigate } from "react-router-dom";
import ProfilePage from '../ProfilePage/ProfilePage';

function AuthorizhedPage() {

  const userDetails = useSelector((state: RootState) => state.userState.userDetails);
  console.log(userDetails)
          
  return (

    
    <div >

      {!userDetails ? "PAGE NOT FOUND":
      
      <>

        <ProfilePage user={userDetails}/>
       
      </>
      }



    </div>
  )
}

export default AuthorizhedPage
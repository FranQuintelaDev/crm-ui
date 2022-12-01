
import React from 'react';
import { useState } from 'react';
import SignUpForm from '../components/SignUpForm';

export default function SignUp() {


  // here we create an array state to store the contact form data
  const [user, updateUser] = useState();

  return (
    <div className='centeredPage rows al-i-center'>
      <h1 className="title">SignUp Page</h1>

      <div className="card rows"  >
        <img src="https://via.placeholder.com/150 " alt="Avatar" style={{ width: 'width:100%' }} />

        {user ? <> <p id="signUpSuccessMsg" className="">User {user.username} created</p> </> : <></>}
        <SignUpForm updateUser={updateUser}></SignUpForm>
      </div>

    </div>
  );
}
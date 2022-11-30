
import React from 'react';
import { useState } from 'react';
import SignUpForm from '../components/SignUpForm';

export default function SignUp() {


  // here we create an array state to store the contact form data
  const [user, updateUser] = useState();

  return (
    <>
    <h1 className="title">Welcome Page</h1>
    {user ? <> <p id="signUpSuccessMsg" className="">User {user.username} created</p> </>: <></>}
    <SignUpForm updateUser={updateUser}></SignUpForm>
    </>
  );
}
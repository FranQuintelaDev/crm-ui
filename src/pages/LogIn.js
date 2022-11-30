
import React from 'react';
import { useState } from 'react';
import LogInForm from '../components/LogInForm';

export default function LogIn() {


  // here we create an array state to store the contact form data
  const [user, updateUser] = useState();

  return (
    <>
    <h1 className="title">LogIn Page</h1>
    <LogInForm></LogInForm>
    </>
  );
}
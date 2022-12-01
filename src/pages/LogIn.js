
import React from 'react';
import { useState } from 'react';
import LogInForm from '../components/LogInForm';

export default function LogIn() {

  return (
    
    <div className='centeredPage rows al-i-center'>
    <h1 className="title">LogIn Page</h1>

    <div className="card rows"  >
      <img src="https://via.placeholder.com/150 " alt="Avatar" style={{ width: 'width:100%' }} />

      <LogInForm></LogInForm>
    </div>

  </div>

    
  );
}
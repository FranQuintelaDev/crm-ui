import React, { Component } from 'react';
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
export default function Opportunities() {

  return (
    <>
      <h1 className="title">Opportunities Page</h1>
      <Outlet />
    </>
  );

}



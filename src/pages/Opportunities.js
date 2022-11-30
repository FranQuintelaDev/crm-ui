import React, { Component } from 'react';
import { useState, useEffect } from "react";

export default function Opportunities() {

  const [opportunities, setOpportunities] = useState();

  useEffect(() => {

    fetch("http://localhost:8080/api/v1/opportunities")
      .then(res => res.json())
      .then(
        (data) => {
          setOpportunities(data);
        }
      );

  }, [])

  return (
    <>
      <h1 className="title">Opportunities Page</h1>
      {opportunities ?
        <>
          {opportunities.map(opportunity =>
            <div key={opportunity.id} id="opportunity">
              <h2 className="">{opportunity.name}</h2>
            </div>
          )}
        </> : <></>}

    </>
  );

}



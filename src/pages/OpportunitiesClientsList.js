import React, { Component } from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function OpportunitiesClientsList() {

  const [opportunities, setOpportunities] = useState();

  useEffect(() => {

    fetch("http://localhost:8080/api/v1/opportunities/clients")
      .then(res => res.json())
      .then(
        (data) => {
          setOpportunities(data);
        }
      );

  }, [])

  return (
    <>
      <h1 className="title">Opportunities Clients List</h1>
      {opportunities ?
        <>
          {opportunities.map(opportunity =>
            <div key={opportunity.id} id="opportunity">
              <Link to={"/opportunities/" + opportunity.id}><h2 className="">{opportunity.name}</h2></Link>

            </div>
          )}
        </> : <></>}

    </>
  );

}



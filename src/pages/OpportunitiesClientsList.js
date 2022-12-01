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
      <h1 className="title">Clients</h1>
      {opportunities ?
        <>
          <div id="opportunities" className="rows">
            {opportunities.map(opportunity =>
              <Link to={"/opportunities/" + opportunity.id} key={opportunity.id} id="opportunity">
                <div className="card cols"  >
                  <img src="https://via.placeholder.com/150 " alt="Avatar" style={{ width: 'width:100%' }} />
                  <div className="container">
                    <h4><b>{opportunity.name}</b></h4>
                    <p>Click to see details</p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </> : <></>}

    </>
  );

}



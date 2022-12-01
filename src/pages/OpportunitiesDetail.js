import React, { Component } from 'react';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
export default function OpportunitiesDetail() {

  const [opportunity, setOpportunity] = useState();
  const [contacts, setContacts] = useState();

  let { opportunityId } = useParams();

  useEffect(async () => {

    await fetch("http://localhost:8080/api/v1/opportunities/" + opportunityId)
      .then(res => res.json())
      .then(
        (data) => {
          setOpportunity(data);
        }
      );
    //TODO: En un futuro se deberían devolver con la llamada a opportunity 
    fetch("http://localhost:8080/api/v1/opportunities/" + opportunityId + "/contacts")
      .then(res => res.json())
      .then(
        (data) => {
          setContacts(data);
        }
      );
  }, [])

  return (
    <>

      {opportunity ?
        <>
          <h1 id="opportunityName" className="title">{opportunity.name}</h1>
          {contacts ?
            <>
              <h2>Contacts</h2>
              {contacts.map(contact =>
                <div key={contact.id} id="contact">

                  <p className="">{contact.title}</p>
                </div>
              )}
            </> : <></>}
        </> : <></>}

    </>
  );

}



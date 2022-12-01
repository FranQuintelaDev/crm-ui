import React, { Component } from 'react';
import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from '../components/Modal';
import { useNavigate } from "react-router-dom";

export default function OpportunitiesDetail() {

  const [opportunity, setOpportunity] = useState();
  const [contacts, setContacts] = useState();
  const [show, setShow] = useState(false);


  const [isClientReason, setIsClientReason] = useState();



  const handleChange = (event) => {
    setIsClientReason(event.target.value);
  };

  const navigate = useNavigate();


  let { opportunityId } = useParams();

  useEffect(() => {

    fetch("http://localhost:8080/api/v1/opportunities/" + opportunityId)
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          "id": opportunity.id,
          "name": opportunity.name,
          "isClientReason": isClientReason,
          "client": true
        })
    };

    fetch("http://localhost:8080/api/v1/opportunities/" + opportunityId, requestOptions)
      .then(res => res.json())
      .then(
        (data) => {
          console.log(data);
          setOpportunity(data);
        },
        (error) => {
        }
      );
  };

  const markAsOpportunityHandler = () => {
    

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          "id": opportunity.id,
          "name": opportunity.name,
          "isClientReason": "",
          "client": false
        })
    };

    fetch("http://localhost:8080/api/v1/opportunities/" + opportunityId, requestOptions)
      .then(res => res.json())
      .then(
        (data) => {
          console.log(data);
          setOpportunity(data);
        },
        (error) => {
        }
      );
  };

  return (
    <>

      {opportunity ?
        <>
          <h1 id="opportunityName" className="title">{opportunity.name}</h1>
          {opportunity.client ? <><p id="isClientText">Is Client</p> <button id="markAsOpportunityButton" onClick={markAsOpportunityHandler}>Mark as Opportunity</button></> : <> <p id="isOpportunityText">Is Opportunity</p> <button id="markAsClientButton" onClick={() => setShow(true)}>Mark as Client</button></>}
          

          <Modal title="From opportunity to client" id="isClientButton" onClose={() => setShow(false)} show={show}>
            <form onSubmit={handleSubmit}>

              <div>
                <input
                  type="text"
                  name="isClientReason"
                  id="isClientReason"
                  placeholder="Reason"
                  onChange={handleChange}
                />
              </div>

              <div>
                <button type="submit" id="isClientSubmitButton">Submit</button>
              </div>

            </form>
          </Modal>

          {contacts ?
            <>
              <h3>Contacts</h3>
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



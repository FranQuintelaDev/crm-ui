import React, { Component } from 'react';
import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from '../components/Modal';
import { useNavigate } from "react-router-dom";

export default function OpportunitiesDetail() {

  const [opportunity, setOpportunity] = useState();
  const [contacts, setContacts] = useState();
  const [showModalClient, setShowModalClient] = useState(false);
  const [showModalContact, setShowModalContact] = useState(false);

  const [contactInfo, setContactInfo] = useState({
    title: "",
    type: "",
    date: ""
  });

  const [isClientReason, setIsClientReason] = useState();



  const handleChange = (event) => {
    setIsClientReason(event.target.value);
  };

  const handleChangeContact = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
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

  const handleSubmitContact = (event) => {
    event.preventDefault();
    console.log(event);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          "title": contactInfo.title,
          "type": contactInfo.type,
          "date": contactInfo.date
        })
    };

    fetch("http://localhost:8080/api/v1/opportunities/" + opportunityId + "/contacts", requestOptions)
      .then(res => res.json())
      .then(
        (data) => {
          console.log(data);
          setContacts(data);
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
      <h1 className="title">Opportunity Detail</h1>
      {opportunity ?
        <div id="opportunityDetail" className="rows">
          <div className="card cols"  >
            <img src="https://via.placeholder.com/150 " alt="Avatar" style={{ width: 'width:100%' }} />
            <div className="container">
              <h4 id="opportunityName"><b>{opportunity.name}</b></h4>
              {opportunity.client ? <><p id="isClientText">Is Client</p> <button id="markAsOpportunityButton" onClick={markAsOpportunityHandler}>Mark as Opportunity</button></> : <> <p id="isOpportunityText">Is Opportunity</p> <button id="markAsClientButton" onClick={() => setShowModalClient(true)}>Mark as Client</button></>}
            </div>
          </div>



          <Modal title="From opportunity to client" id="isClientButton" onClose={() => setShowModalClient(false)} show={showModalClient}>
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

          <div id="contacts" className="rows">

            <div className="cols">
              <h3>Contacts</h3>

              <button id="addContactButton" onClick={() => setShowModalContact(true)}>Add Contact</button>
            </div>

            <Modal title="Add Contact" id="addContactModal" onClose={() => setShowModalContact(false)} show={showModalContact}>
              <form onSubmit={handleSubmitContact}>

                <div>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    onChange={handleChangeContact}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="type"
                    id="type"
                    placeholder="Type"
                    onChange={handleChangeContact}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="date"
                    id="date"
                    placeholder="Date as yyyy-MM-dd"
                    onChange={handleChangeContact}
                  />
                </div>
                <div>
                  <button type="submit" id="addContactSubmitButton">Submit</button>
                </div>

              </form>
            </Modal>
            <div id="contactsList" className="rows">
              {contacts ?
                <>
                  {contacts.map(contact =>
                    <div className="card " key={contact.id} id="contact">

                      <div className="container">
                        <h4 ><b>{contact.title}</b></h4>
                        <p>{contact.type}</p>
                        <p >{contact.date}</p>

                      </div>
                    </div>


                  )}
                </> : <></>}
            </div>
          </div>


        </div> : <></>}

    </>
  );

}



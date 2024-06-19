/**
 * The App component renders a list of contacts with names, phone numbers, and addresses within a
 * container.
 * @returns The App component is being returned, which contains a container with a heading "Contact
 * list:" and three Contact components with different name, phone, and address props.
 */
import React, { useState } from "react";
import Contact from "./components/Contact";
import "./styles/app.css";
import ContactAdder from "./components/ContactAdder";
const App = () => {
  const [contacts, setContacts] = useState([])
  const addContactData = (contactData) => { 
    setContacts([contactData, ...contacts])
  };
  const saveData = () => {
    localStorage.setItem("name", "abcd") //(key,value) format
  };

  

  return (
    <>
      <div className="contact_adder">
        <ContactAdder onContactAdded = {addContactData} />
      </div>
      <div className="contact_list">
        <h3>Contact list:</h3>
        {contacts.map(data=>(
          <Contact data = {data}></Contact>
        ))}

        <button onClick = {saveData}>Save Data</button>
      </div>
    </>
  );
};  

export default App;

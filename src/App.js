/**
 * The App component renders a list of contacts with names, phone numbers, and addresses within a
 * container.
 * @returns The App component is being returned, which contains a container with a heading "Contact
 * list:" and three Contact components with different name, phone, and address props.
 */
import React from "react";
import Contact from "./components/Contact";
import "./styles/app.css";
import ContactAdder from "./components/ContactAdder";
const App = () => {
  const contacts = [
    { name: "Sandy", phone: "9846029184", address: "Nepal" },
    { name: "Dev", phone: "9856022105", address: "India" },
    { name: "Chris", phone: "9856733212", address: "Bhutan" }
  ];
  return (
    <>
      <div className="contact_adder">
        <ContactAdder />
      </div>
      <div className="contact_list">
        <h3>Contact list:</h3>
        {contacts.map(data=>(
          <Contact data = {data}></Contact>
        ))}
      </div>
    </>
  );
};

export default App;

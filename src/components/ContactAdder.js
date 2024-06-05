import { useState } from "react";
const ContactAdder = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");

  const onClickHandler = () => {
    const contactData = { name: name, number: mobile, location: location};
    console.log(contactData);
  };
  return (
    <>
      <div className="simpleAdder">
        Contact Adder:
        <br />
        <input
          type="text"
          value={name}
          placeholder="Contact Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          value={mobile}
          placeholder="Mobile Number"
          onChange={(e) => setMobile(e.target.value)}
        ></input>
        <input
          type="location"
          value={location}
          placeholder="Address Location"
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <br />
        <br />
        <button onClick={onClickHandler}>Click me.</button>
      </div>
    </>
  );
};
export default ContactAdder;

const Contact = (props) => {
  return (
    <>
      <div className="contact">
        {props.data.name}
        <br />
        {props.data.phone}
        <br />
        {props.data.address}
        <br />
      </div>
      <hr />
    </>
  );
};
export default Contact;

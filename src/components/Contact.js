const Contact = (props) => {
  return (
    <>
      <div className="contact">
        {props.data.name}
        <br />
        {props.data.mobile}
        <br />
        {props.data.location}
        <br />
      </div>
      <hr />
    </>
  );
};
export default Contact;

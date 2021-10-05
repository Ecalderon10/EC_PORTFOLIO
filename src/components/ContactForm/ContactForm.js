import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

//capture firstname and lastname
const ContactForm = () => {
  //function is responsible for submitting the users input

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [favfood, setFavfood] = useState("");

  const handleInputChange = (e) => {
    // console.log(e.target);

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "firstname") {
      setFirstName(inputValue);
    } else if (inputType === "lastname") {
      setLastName(inputValue);
    } else {
      setFavfood(inputValue);
    }
  };

  const handleformSubmit = (e) => {
    // console.log(e);
    e.preventDefault();
  };

  //JSX
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="Input" placeholder="First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="Input" placeholder="Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="Number" placeholder="Phone Number" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;

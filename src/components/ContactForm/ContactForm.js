import React, {useState} from "react";
import {Form, Button, Card} from "react-bootstrap";


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
  


  if(inputType === 'firstname') {
    setFirstName(inputValue)
  } else if (inputType === 'lastname'){
    setLastName(inputValue)
  } else {
    setFavfood(inputValue)
  }
  
}

const handleformSubmit = (e) => {
  // console.log(e);
  e.preventDefault();
}


   //JSX
   return(
 <p> <>
 <Form>
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Form>
</></p>
)}

export default ContactForm;
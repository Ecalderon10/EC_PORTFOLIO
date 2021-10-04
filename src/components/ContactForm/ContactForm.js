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
<>
 <Form>
 <h1>Contact Form</h1>
</Form>
</>
)}

export default ContactForm;
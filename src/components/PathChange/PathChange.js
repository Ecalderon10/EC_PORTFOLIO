import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import ContactForm from "../ContactForm/ContactForm";



function PortfolioChange() {

  const [key, setKey] = useState("AboutMe");

  const handlePageChange = (e) => {
    setKey(e);
  };

  const renderPath = () => {
    if (key === "Projects") {
      return <Projects />;
    }
    if (key === "ContactForm") {
      return <ContactForm />;
    } else {
      return <AboutMe />;
    }
  };

  return (
    <>
        <NavBar key={key} handlePageChange={handlePageChange} />
      {renderPath()}
      <Footer />
    </>
  );
}
 export default PortfolioChange;
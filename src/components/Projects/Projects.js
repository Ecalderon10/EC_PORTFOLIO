import React, { useState } from "react";
import { Form, Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "../css/Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://user-images.githubusercontent.com/87398458/133019712-aecf7414-7e5a-4ff3-b3d1-a8a328e7c353.png"
        />
        <Card.Body>
          <Card.Title>
            <strong>Teacher Force</strong>
          </Card.Title>
          <Card.Text>
            This application was built to help teachers store data of students
            and helped them be more efficeint in there daily lives.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>JS, Node, SQL, Handlebars</ListGroupItem>
          <ListGroupItem>Number of Contributers:4</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link
            href="https://teacher-force.herokuapp.com/login"
            target="_blank"
          >
            Application Link
          </Card.Link>
          <Card.Link
            href="https://github.com/matthewbush55/teacher-force"
            target="_blank"
          >
            Repository Link
          </Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://user-images.githubusercontent.com/87398458/133524056-6520add0-8163-4082-8540-d8594c850eae.png"
        />
        <Card.Body>
          <Card.Title>
            <strong>Employee Management System</strong>
          </Card.Title>
          <Card.Text>
            This application was built for employers to manage their employees
            in their database.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>JS, SQL, Express, Sequelize </ListGroupItem>
          <ListGroupItem>Number of Contributers:1</ListGroupItem>
        </ListGroup>
        <Card.Body>
          {/* <Card.Link
            href="https://teacher-force.herokuapp.com/login"
            target="_blank"
          >
            Application Link
          </Card.Link> */}
          <Card.Link
            href="https://github.com/Ecalderon10/Employee-Management-System"
            target="_blank"
          >
            Repository Link
          </Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://user-images.githubusercontent.com/87398458/131777676-f2f3548d-d6ca-44e6-abed-4341dc3f3684.png"
        />
        <Card.Body>
          <Card.Title>
            <strong>Team Generator</strong>
          </Card.Title>
          <Card.Text>
            This application was built to help employers stay organized and help
            them build a platform where they could add staff to the their
            website.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>JS, Jest, Inquirer</ListGroupItem>
          <ListGroupItem>Number of Contributers:1</ListGroupItem>
        </ListGroup>
        <Card.Body>
          {/* <Card.Link
            href="https://teacher-force.herokuapp.com/login"
            target="_blank"
          >
            Application Link
          </Card.Link> */}
          <Card.Link
            href="https://github.com/Ecalderon10/Team-Generator"
            target="_blank"
          >
            Repository Link
          </Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="data:image/jpeg;base64,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"
        />
        <Card.Body>
          <Card.Title>
            <strong>Back-End Of An E-Commerce</strong>
          </Card.Title>
          <Card.Text>
            This application was built to help teachers store data of students
            and helped them be more efficeint in there daily lives.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>JS, Express, MySQl2, Sequelize</ListGroupItem>
          <ListGroupItem>Number of Contributers:1</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link
            href="https://github.com/Ecalderon10/E-commerce-Back-End"
            target="_blank"
          >
            Repository Link
          </Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://user-images.githubusercontent.com/87398458/135949505-6ea6ff66-5bd0-4a05-a5e0-48a2d6c1ec55.png"
        />
        <Card.Body>
          <Card.Title>
            <strong>Tech Blog</strong>
          </Card.Title>
          <Card.Text>
            This application was built to help user's build a profile and be
            able to make a post,comment, and view their news feed.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>JS,express,handlebars,sequelize</ListGroupItem>
          <ListGroupItem>Number of Contributers:1</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link
            href="https://github.com/Ecalderon10/Tech-Blog"
            target="_blank"
          >
            Application Link
          </Card.Link>
          <Card.Link
            href="https://github.com/Ecalderon10/Tech-Blog"
            target="_blank"
          >
            Repository Link
          </Card.Link>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Projects;

import React from "react";


import { Navbar, Button, FormControl, Form, Nav } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";


const MovieNav = ({ handleShow,setSearch,ratingChanged }) => {
  
  

  return (
    <div>
      <Navbar style={{ backgroundColor: "#000000" }}>
        <Navbar.Brand
          href="#home"
          style={{
            color: "white",
            fontSize: "30px",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
          }}
        >
          <img src='https://www.journaldugeek.com/content/uploads/2018/03/amazon-prime-video-debarque-enfin-en-france.jpg' style={{ height: 60,width: 170, marginLeft: 0 }}/>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home"> </Nav.Link>
        </Nav>
        <Form inline>
          <ReactStars
            style={{ paddingRight: "20px" }}
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
            
          />

          <FormControl
           type="text"
            placeholder="Search" 
            className="mr-sm-2"
            onChange={e=>{setSearch(e.target.value)}} />

          <Button onClick={handleShow} variant="outline-light">
            <i class="fas fa-folder-plus fa-2x"></i>
          </Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default MovieNav;
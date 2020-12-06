import React from "react";
import {Navbar, Nav} from "react-bootstrap";


const NavigationBar = () => {
    return (
        <div>
           <nav>
                <Navbar expand="sm" fixed="top" bg="dark" variant="dark">
                {/* <Navbar.Brand href="#home">I love RGB</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#projectsContainer">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                </Navbar>
           </nav>
        </div>
    );
}

export default NavigationBar;

/**
 * * This component is designed using the react bootstrap: https://react-bootstrap.github.io/components/navbar/
 */

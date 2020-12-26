import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-scroll";


const NavigationBar = () => {
    return (
        <div>
           <nav>
                <Navbar expand="sm" fixed="top" bg="dark" variant="dark">
                {/* <Navbar.Brand href="#home">I love RGB</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Link to="home" smooth="true" duration="300"><Nav.Link href="#home">Home</Nav.Link></Link>
                        <Link to="chipsContainer" smooth="true" duration="500"><Nav.Link href="#chipsContainer">Skills</Nav.Link></Link>
                        <Link to="projectsContainer" smooth="true" duration="500"><Nav.Link href="#projectsContainer">Projects</Nav.Link></Link>
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
 * * Smooth Scroll effect is added using the "react-scroll" npm package: https://www.npmjs.com/package/react-scroll
 */

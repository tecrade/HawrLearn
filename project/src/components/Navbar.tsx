import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { Search,} from 'lucide-react';
import { useNavigate } from "react-router-dom";

const NavigationBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={scrolled ? 'navbar scrolled' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href="#home" className="text-white fw-bold"><img src='public\images\navlogo.png'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="text-white"  onClick={() => navigate("/")}>Home</Nav.Link>
            <NavDropdown 
              title={<span className="text-white">Courses</span>} 
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#web-development">Web Development</NavDropdown.Item>
              <NavDropdown.Item href="#data-science">Data Science</NavDropdown.Item>
              <NavDropdown.Item href="#mobile-development">Mobile Development</NavDropdown.Item>
              <NavDropdown.Item href="#cloud-computing">Cloud Computing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#all-courses">All Courses</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#events" className="text-white" onClick={() => navigate("/events")}>Events</Nav.Link>
            <Nav.Link href="#careers" className="text-white">Careers</Nav.Link>
            <Nav.Link href="#blog" className="text-white">Blog</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center">
            <div className="search-box me-2">
              <Search size={16} className="search-icon" />
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </div>
            <Button className="login-btn">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
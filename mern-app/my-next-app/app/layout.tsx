'use client'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
config.autoAddCss = true;

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Link from 'next/link';


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Bootstrap Example Mern App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* see  https://stackoverflow.com/questions/57564244/linking-a-bootstrap-navbar-correctly-with-nextjs */}
            <Nav.Link as={Link} href="/">Home</Nav.Link>
            <Nav.Link as={Link} href="/hello">Hello</Nav.Link>
            <Nav.Link as={Link} href="/todos">Todos</Nav.Link>
                
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body data-color-mode="light" data-light-theme="light" data-dark-theme="dark">
        {/* Layout UI */
         <BasicExample/>
        }
        {/* Place children where you want to render a page or nested layout */}
        <Container fluid="md">
          <Row>
            <Col><main>{children}</main></Col>
          </Row>
        </Container>
      </body>
    </html>
  )
}

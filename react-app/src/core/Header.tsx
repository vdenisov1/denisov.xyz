import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>DENISOV</Navbar.Brand>
            </LinkContainer>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                  <Nav.Link href="https://www.linkedin.com/in/vdenisov1/" target="_blank"><i className="bi bi-linkedin text-light"></i></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="https://www.twitter.com/vdenisov1" target="_blank"><i className="bi bi-twitter text-light"></i></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="https://www.github.com/vdenisov1" target="_blank"><i className="bi bi-github text-light"></i></Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}

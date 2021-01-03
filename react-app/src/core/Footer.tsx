import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="bg-dark mt-4">
          <Container>
            <Nav className="justify-content-center pt-3">
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
          </Container>
          <Container className="mt-5 text-center text-light">
            <h3>VLADIMIR DENISOV</h3>
            <p>Austin, Texas</p>
          </Container>
        </footer>
      </>
    )
  }
}

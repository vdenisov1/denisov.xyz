import React from 'react';
import './HomePage.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import headshot from '../headshot.jpeg';

export default class HomePage extends React.Component {
    
  componentDidMount() {
    document.title = "Denisov | Home"
  }
  
  render() {
    return (
      <>
        <Row className="mt-5">
          <Col className="text-center">
            <img className="profile-image" src={headshot} alt="headshot"></img>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="main-content">
              <a href="https://www.linkedin.com/in/vdenisov1/" target="_blank"><i className="bi bi-linkedin text-light"></i></a>
              <a href="https://www.twitter.com/vdenisov1" target="_blank"><i className="bi bi-twitter text-light"></i></a>
              <a href="https://www.github.com/vdenisov1" target="_blank"><i className="bi bi-github text-light"></i></a>
          </Col>
        </Row>
      </>
    );
  }
}

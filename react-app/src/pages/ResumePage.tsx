import React from 'react';
import './ResumePage.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class ResumePage extends React.Component {
  componentDidMount() {
    document.title = "Denisov | Resume"
  }

  render() {
    return (
      <>
        <Row>
          <Col>
            <h1>Certifications &amp; Education</h1>
            <h2>Masters in Computer Science (2020)</h2>
            <p>
              <strong>Georgia Institute Of Technology</strong>
            </p>
          </Col>
        </Row>
      </>
    )
  }
}

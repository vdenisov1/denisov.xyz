import React from 'react';
import './HomePage.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class HomePage extends React.Component {
  componentDidMount() {
    document.title = "Denisov | Home"
  }
  
  render() {
    return (
      <>
        <Row className="mt-5">
          <Col>
            <h1>Leader who loves to build.</h1>
            <p className="mt-4">A leader and builder at <a href="https://aws.amazon.com">Amazon Web Services (AWS)</a>. As a <strong>Team Lead</strong> I provide personal and career coaching, technical leadership, and work with recruiting to scale the Professional Services organization at AWS. As a <strong>Senior Cloud Application Architect</strong> I specialize in delivery and oversight of large-scale cloud migrations, application modernization, and development of green-field cloud-native applications.</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h1>Cloud-Native Microservices.</h1>
            <p className="mt-4">Lately, I’ve been all-in on AWS working on large-scale eCommerce applications and microservices in <strong>Kotlin </strong>with some <strong>AngularJS</strong> and a lot of <strong>CloudFormation</strong> (more recently <strong>AWS CDK</strong>) automating everything. The question I always ask myself which drives me to automate everything as much as possible is <strong>“How can I do less?”</strong> because time is a scarce resource, and you want to focus it on that what is most important (in my case, building applications).</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h1>Before you go...</h1>
            <p className="mt-4">A quick note on motivation for readers. I want to share that <strong>anyone can succeed in anything with enough persistence, determination, and hard work</strong>. I started out as a high school dropout without a plan ahead, turned my life around after getting my G.E.D, obtained an undergraduate degree, worked at one of the largest Financial Institution: BlackRock, quit, traveled, switched careers into Tech achieving my Masters Degree in Computer Science at Georgia Tech and ending up at AWS doing work I enjoy (travel, code, solve problems).</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h1>How to reach me.</h1>
            <p className="mt-4">Interact with me on my social media accounts <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/vdenisov1">LinkedIn</a>, <a rel="noreferrer" target="_blank" href="https://www.twitter.com/vdenisov1">Twitter</a>, <a rel="noreferrer" target="_blank" href="https://www.quora.com/profile/Vladimir-Denisov-1">Quora</a>, <a rel="noreferrer" target="_blank" href="https://medium.com/@vdenisov1">Medium</a>, and <a rel="noreferrer" href="https://www.github.com/vdenisov1">Github</a>.
            </p>
          </Col>
        </Row>
      </>
    );
  }
}

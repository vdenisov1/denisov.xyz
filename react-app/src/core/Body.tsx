import React from 'react';
import Container from 'react-bootstrap/Container';
import Routes from './Routes';

export default class Body extends React.Component {
  render() {
    return (
      <>
        <Container className="mt-4 mb-4">
          <Routes />
        </Container>
      </> 
    )
  }
}

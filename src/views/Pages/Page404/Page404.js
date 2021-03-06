import React, { Component } from 'react';
import { Button, Col, Container, Form, InputGroup, InputGroupAddon, InputGroupText, Row } from 'react-bootstrap';

class Page404 extends Component {
  render() {
    return (
      <div className="page404 flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="clearfix">
                <h1 className="float-left display-3 mr-4">404</h1>
                <h4 className="pt-3">Oops! You're lost.</h4>
                <p className="text-muted float-left">The page you are looking for was not found.</p>
              </div>
              <InputGroup className="input-prepend">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <i className="fa fa-search"></i>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control size="16" type="text" placeholder="What are you looking for?" />
                <InputGroup.Append>
                  <Button color="info">Search</Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page404;

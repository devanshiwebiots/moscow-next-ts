import React from "react";
import { Card, CardBody, CardHeader, Col, Input } from "reactstrap";

export function Subscriber() {
  return (
    <Col sm={12}>
      <Card>
        <CardHeader className='pb-0 border-0'>
          <h5>Subscriber</h5>
        </CardHeader>
        <CardBody>
          <p className='mb-2'>To get more detail for new types of blogs.</p>
          <Input type='email' placeholder='Enter your email' />
          <div className='btn btn-primary w-100 mt-3'>Get Started</div>
        </CardBody>
      </Card>
    </Col>
  );
}

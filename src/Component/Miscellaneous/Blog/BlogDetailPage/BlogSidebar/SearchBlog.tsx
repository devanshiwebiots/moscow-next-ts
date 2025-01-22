import React from "react";
import { Card, CardBody, CardHeader, Col, Input } from "reactstrap";

export function SearchBlog() {
  return (
    <Col sm={12}>
      <Card>
        <CardHeader className='pb-0 border-0'>
          <h5>Search</h5>
        </CardHeader>
        <CardBody>
          <div className='blog-search'>
            <Input type='text' placeholder='Search here...' />
            <i className='fa fa-search'></i>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

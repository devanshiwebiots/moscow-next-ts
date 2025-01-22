import React from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

export function Followus() {
  return (
    <Col sm={12}>
      <Card>
        <CardHeader className='pb-0 border-0'>
          <h5>Follow Us</h5>
        </CardHeader>
        <CardBody>
          <ul className='blog-follow'>
            <li>
              <a href='https://en-gb.facebook.com/login/' target='_blank'>
                <i className='fa fa-facebook-square'></i>
              </a>
            </li>
            <li>
              <a href='https://twitter.com/LOGIN' target='_blank'>
                <i className='fa fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/accounts/login/' target='_blank'>
                <i className='fa fa-instagram'></i>
              </a>
            </li>
            <li>
              <a href='https://www.skype.com/en/' target='_blank'>
                <i className='fa fa-skype'></i>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/login' target='_blank'>
                <i className='fa fa-linkedin'></i>
              </a>
            </li>
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
}

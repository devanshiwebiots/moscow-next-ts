import { tags } from "@/Data/Miscellaneous/Blog";
import React from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

export function PopularTag() {
  return (
    <Col sm={12}>
      <Card>
        <CardHeader className='pb-0 border-0'>
          <h5>Popular Tags</h5>
        </CardHeader>
        <CardBody>
          <ul className='tags'>
            {tags.map((tag, index) => (
              <li key={index}>
                <a href='#'>{tag}</a>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
}

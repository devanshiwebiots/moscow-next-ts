"use client";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { ImageGallery } from "@/Constant";
import { MyGallery } from "./MyGallery";

const GalleryGridContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm='12'>
          <Card>
            <CommonCardHeader title={ImageGallery} />
            <CardBody className='gallery my-gallery'>
              <Row>
                <MyGallery />
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GalleryGridContainer;

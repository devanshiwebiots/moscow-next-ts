"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import CardsClass from "./CardsClass";
import CardsPagination from "../Common/CardsPagination";
import Sidebar from "../Common";

const CardViewContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xxl='3' xl='4' className='box-col-12'>
          <div className='md-sidebar'>
            <Sidebar />
          </div>
        </Col>
        <Col xxl='9' xl='8' className='box-col-12'>
          <Row>
            <CardsClass />
            <CardsPagination />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CardViewContainer;

"use client";
import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { LoginForm } from "../Common/LoginForm";

const LoginTooltipContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl="5">
          <RatioImage className="bg-img-cover bg-center" src={`${ImagePath}/login/3.jpg`} alt="looginpage" />
        </Col>
        <Col xl="7" className="p-0">
          <div className="login-card login-dark">
            <LoginForm />
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default LoginTooltipContainer;

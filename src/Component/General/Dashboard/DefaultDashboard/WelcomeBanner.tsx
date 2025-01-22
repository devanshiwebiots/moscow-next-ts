import { ImagePath } from "@/Constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

const WelcomeBanner = () => {
  return (
    <Col xl='5' md='6'>
      <Card className='welcome-card'>
        <CardBody>
          <div className='d-flex'>
            <div className='flex-grow-1'>
              <h1>Good day, Lena Miller</h1>
              <p>Welcome to the Admin clan! We appreciate your interest in our dashboard.</p>
              <Link className='btn' href='https://themeforest.net/user/pixelstrap/portfolio' target='_blank'>
                Go Premium
              </Link>
            </div>
            <div className='flex-shrink-0'>
              <Image src={`${ImagePath}/dashboard/boxes.png`} height={241} width={332} alt='Welcome banner' />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WelcomeBanner;

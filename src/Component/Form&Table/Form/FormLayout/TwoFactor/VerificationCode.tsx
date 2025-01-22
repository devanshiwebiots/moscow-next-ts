import { Call, Href, ImagePath, OtpCode, OtpCodeSent, Resend, VerificationCodeHeading, Verify } from "@/Constant";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Button, Col, Form, Row } from "reactstrap";

const VerificationCode: React.FC = () => {
  const [otp, setOtp] = useState<string>("");

  const handleChange = (otp: string) => {
    setOtp(otp);
  };

  const renderInput = (props: any) => <input {...props} />;

  return (
    <Col md='6'>
      <div className='card-wrapper border rounded-3 h-100'>
        <div className='authenticate'>
          <h4>{VerificationCodeHeading}</h4>
          <img className='img-fluid' src={`${ImagePath}/forms/authenticate.png`} alt='authenticate' />
          <span>{OtpCodeSent}</span>
          <span>+91********70</span>
          <Form onSubmit={(event) => event.preventDefault()}>
            <Row>
              <Col>
                <h5>{OtpCode}</h5>
              </Col>
              <Col className='otp-generate d-flex justify-content-between'>
                <OtpInput value={otp} onChange={handleChange} numInputs={6} shouldAutoFocus renderInput={renderInput} containerStyle='otp-container' inputStyle='otp-input form-control' />
              </Col>
              <Col>
                <Button color='primary' className='w-100'>
                  {Verify}
                </Button>
              </Col>
              <div>
                <span>Not received your code?</span>
                <span>
                  <a href={Href}>{Resend} </a>OR<a href={Href}>{Call}</a>
                </span>
              </div>
            </Row>
          </Form>
        </div>
      </div>
    </Col>
  );
};

export default VerificationCode;

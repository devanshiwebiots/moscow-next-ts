import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { Col, Form, Row } from "reactstrap";

export const DefaultRangeSliderForm = () => {
  const [values, setValues] = useState([550]);

  return (
    <Form className='theme-form form-label-align-right range-slider'>
      <Row className='form-group py-1'>
        <Col md='10'>
          <div style={{ color: "var(--theme-default)" }} className='d-flex justify-content-center flex-wrap m-3'>
            <Range
              values={values}
              step={1}
              min={100}
              max={1000}
              onChange={(values) => setValues(values)}
              renderTrack={({ props, children }) => (
                <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} style={{ ...props.style, height: "36px" }} className='d-flex w-100'>
                  <output className='mt-2 mx-2'>100</output>
                  <div ref={props.ref} className='rounded-2 w-100' style={{ height: "10px", background: getTrackBackground({ values: values, colors: ["var(--theme-default)", "#ccc"], min: 100, max: 1000 }), alignSelf: "center" }}>
                    {children}
                  </div>
                  <output className='mt-2 mx-2'>1000</output>
                </div>
              )}
              renderThumb={({ props }) => {
                const { key, ...restProps } = props;
                const prop = { ...restProps };
                return (
                  <div key={key} {...prop} className='d-flex justify-content-center align-items-center' style={{ ...prop.style, height: "3px", width: "3px", backgroundColor: "#FFF", boxShadow: "0px 2px 6px #AAA" }}>
                  <div style={{ height: "20px", width: "5px", backgroundColor: "var(--theme-default)" }} />
                </div>
                );
              }}    
            />
            <output id='output' className='mt-3'>
              {values[0]}
            </output>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

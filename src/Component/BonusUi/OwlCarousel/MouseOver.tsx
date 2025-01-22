import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, MouseWheelVariants } from "@/Constant";
import { mouseWheelSliderOptions, WithIndicatorData } from "@/Data/BonusUi/OwlCarousel";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import { Card, CardBody, Col } from "reactstrap";

const MouseOver = () => {
  const sliderRef = useRef<Slider | null>(null);

  const handleWheel = (e: { preventDefault: () => void; deltaY: number }) => {
    e.preventDefault();
    if (!sliderRef.current) return;
    if (e.deltaY < 0) {
      sliderRef.current.slickPrev();
    } else {
      sliderRef.current.slickNext();
    }
  };

  useEffect(() => {
    const sliderDiv = sliderRef.current?.innerSlider?.list;
    if (sliderDiv) {
      sliderDiv.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (sliderDiv) {
        sliderDiv.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <Col xl={6} xs={12}>
      <Card className='title-line'>
        <CommonCardHeader title={MouseWheelVariants} span={WithIndicatorData} />
        <CardBody className='custom-padding-slider'>
          <Slider ref={sliderRef} {...mouseWheelSliderOptions}>
            {Array.from({ length: 8 }, (_, index) => index + 1).map((item, index) => (
              <div className='item px-1' key={index}>
                <img src={`${ImagePath}/slider/${item}.jpg`} alt='Drawing-room' className='img-fluid rounded' />
              </div>
            ))}
          </Slider>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MouseOver;

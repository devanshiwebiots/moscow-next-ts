import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AutoPlayVariants, ImagePath } from "@/Constant";
import { AutoPlayData, autoPlaySliderOptions } from "@/Data/BonusUi/OwlCarousel";
import Slider from "react-slick";
import { Card, CardBody, Col } from "reactstrap";

const AutoPlayVariant = () => {
  return (
    <Col xl={6} xs={12}>
      <Card className='title-line'>
        <CommonCardHeader title={AutoPlayVariants} span={AutoPlayData} />
        <CardBody className='custom-padding-slider mb-3'>
          <Slider {...autoPlaySliderOptions}>
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

export default AutoPlayVariant;

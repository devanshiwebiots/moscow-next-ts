import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { ImagePath } from "@/Constant";
import { DeliveryData } from "@/Data/Dashboard/EcommerceDashboarddata";
import { Badge, Card, CardBody, Col, ListGroup } from "reactstrap";

const ProductDelivery:React.FC<{xl:number}> = ({xl}) => {
  return (
    <Col xl={xl} md='6'>
      <Card className='height-equal title-line delivery-card'>
        <DashboardCommonHeader title={"Product Delivery"} />
        <CardBody className='delivery-content'>
          <ListGroup className='order-list mb-0 custom-scrollbar'>
            {DeliveryData.map((item, index) => (
              <li key={index}>
                <div className='light-card'>
                  <img className='img-fluid' src={`${ImagePath}${item.imgSrc}`} alt={item.productName} height={28} width={28}/>
                </div>
                <div className='order-content'>
                  <div>
                    <h6 className='mb-1'>{item.productName}</h6>
                    <span className='f-light f-w-500 f-12'>To : {item.recipient}</span>
                  </div>
                  <div className='text-end'>
                    <Badge color="" className={`f-12 ${item.badgeClass}`}>{item.status}</Badge>
                  </div>
                </div>
              </li>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductDelivery;

import { ImagePath } from "@/Constant";
import { CommonErrorPageType } from "@/Types/PagesType";
import { Button, Col, Container } from "reactstrap";

const CommonErrorPage: React.FC<CommonErrorPageType> = ({ error, color, src }) => {
  const BackToHomePage: string = "BACK TO HOME PAGE";
  const ErrorContent: string = "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.";

  return (
    <div className='page-wrapper compact-wrapper' id='pageWrapper'>
      <div className='error-wrapper'>
        <Container>
        <div className="svg-wrraper">
          
          </div>          
          <div className='error-heading'>
            <h2 className={`headline font-${color}`}>{error}</h2>
          </div>
          <Col md='8' className='offset-md-2'>
            <p className='sub-content'>{ErrorContent}</p>
          </Col>
          <div>
            <Button size='lg' tag='a' color={`${color}-gradien`} href={`/dashboard/default_dashboard`}>
              {BackToHomePage}
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CommonErrorPage;

import { Col, Row } from "reactstrap";
import { HeaderSearch } from "./HeaderSearch/HeaderSearch";
import { HeaderRight } from "./HeaderRight";

export const PageHeader = () => {
  return (
    <Col className='m-0'>
      <Row className="align-items-center">
        <HeaderSearch />
        <HeaderRight />
      </Row>
    </Col>
  );
};

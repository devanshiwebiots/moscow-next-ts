import { Col, Form, Row } from "reactstrap";
import SelectOne from "./SelectOne";
import SelectTwo from "./SelectTwo";
import SelectFour from "./SelectFour";
import SelectFive from "./SelectFive";
import CreateNewCategory from "./CreateNewCategory";

const ProductThree = () => {
  return (
    <div className="sidebar-body">
      <Form>
        <Row className="g-lg-4 g-3">
          <Col xs="12">
            <Row className="g-3">
              <SelectOne />
              <SelectTwo />
              <CreateNewCategory />
            </Row>
          </Col>
          <Col xs="12">
            <Row className="g-3">
              <SelectFour />
              <SelectFive />
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ProductThree;

import { Col, Form, Input, Label, Row } from "reactstrap";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { ProductTitle } from "@/Constant";
import { setFormValue } from "@/Redux/Reducers/AddProductSlice";
import FormEditors from "./FormEditors";

const ProductOne = () => {
  const {formValue} = useAppSelector((state) => state.addProduct)
  const dispatch = useAppDispatch()
  
  return (
    <div className="sidebar-body">
      <Form>
        <Row className="g-2">
          <Col xs="12">
            <Label className="m-0" check>{ProductTitle} <span className="txt-danger"> *</span></Label>
          </Col>
          <Col xs="12">
            <div className="custom-input">
              <Input className={formValue.userName !== "" ? "valid" : "is-invalid"} type="text" required name="userName" 
              onChange={(e)=>dispatch(setFormValue({name:"userName",value:e.target.value}))}/>
            </div>
          </Col>
          <FormEditors />
        </Row>
      </Form>
    </div>
  );
};

export default ProductOne;

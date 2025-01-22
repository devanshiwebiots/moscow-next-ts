import { ErrorMessage, Field } from "formik";
import { Col, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import { ProjectStatus, ProjectProgress, ProjectProgressPlaceholder, FixPrice, Hourly, Priority, Low, Medium, High, Urgent, PriorityPlaceholder } from "@/Constant";
import { FormTypes } from "@/Types/ProjectTypes";

export const ProjectSection = ({errors ,touched}:FormTypes) => {
  return (
    <Row>
      <Col sm="4">
        <FormGroup>
          <Label check>{ProjectProgress}</Label>
          <Field name="progress" as={Input} invalid={touched.progress && !!errors.progress}  placeholder={ProjectProgressPlaceholder} />
          <ErrorMessage name="progress" component={FormFeedback}/>
        </FormGroup>
      </Col>
      <Col sm="4">
        <FormGroup>
          <Label check>{ProjectStatus}</Label>
          <Field name="type" as="select" className="form-select">
            <option value={Hourly}>{Hourly}</option>
            <option value={FixPrice}>{FixPrice}</option>
          </Field>
        </FormGroup>
      </Col>
      <Col sm="4">
        <FormGroup>
          <Label>{Priority}</Label>
          <Field name="priority" as="select" placeholder={PriorityPlaceholder} className="form-select">
            <option value={Low}>{Low}</option>
            <option value={Medium}>{Medium}</option>
            <option value={High}>{High}</option>
            <option value={Urgent}>{Urgent}</option>
          </Field>
        </FormGroup>
      </Col>
    </Row>
  );
};

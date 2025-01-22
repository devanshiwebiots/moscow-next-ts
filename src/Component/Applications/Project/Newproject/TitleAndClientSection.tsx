import { Field, ErrorMessage } from "formik";
import { Col, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import { ClientName, ClientNamePlaceholder, ProjectTitle, ProjectTitlePlaceholder } from "@/Constant";
import { FormTypes } from "@/Types/ProjectTypes";

export const TitleAndClientSection = ({errors,touched}:FormTypes) => {
  return (
    <>
      <Row>
        <Col>
          <FormGroup>
            <Label check>{ProjectTitle}</Label>
            <Field as={Input} invalid={touched.title && !!errors.title} name='title' placeholder={ProjectTitlePlaceholder} />
            <ErrorMessage name="title" component={FormFeedback}/>            
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label check>{ClientName}</Label>
            <Field as={Input} invalid={touched.client && !!errors.client} name='client' placeholder={ClientNamePlaceholder} />
            <ErrorMessage name="client" component={FormFeedback}/>
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};

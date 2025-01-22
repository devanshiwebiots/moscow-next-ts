import { Inputs } from "@/Types/FormType";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Card, CardBody, Col, Form, FormGroup, Label, Row } from "reactstrap";

const BlogCommentForm = () => {
  const {register,handleSubmit,formState: { errors },} = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <Card className='blog-contact'>
      <div className='card-header pb-0 border-0'>
        <h4>Leave Your Comment</h4>
      </div>
      <CardBody>
        <Form className='default-form' onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={4} sm={4}>
              <FormGroup>
                <label htmlFor='name'>Name</label>
                <input className='form-control' type='text' placeholder='Enter your name' {...register("name", { required: "Name is required" })} />
                {errors.name && <span className='text-danger'>{errors.name.message}</span>}
              </FormGroup>
            </Col>
            <Col md={4} sm={4}>
              <FormGroup>
                <Label>Email</Label>
                <input className='form-control' type='email' placeholder='Enter your email' {...register("email", {required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && <span className='text-danger'>{errors.email.message}</span>}
              </FormGroup>
            </Col>
            <Col md={4} sm={4}>
              <FormGroup>
                <Label>Website</Label>
                <input className='form-control' type='text' placeholder='Enter your website' {...register("website", { required: "Website is required" })} />
                {errors.website && <span className='text-danger'>{errors.website.message}</span>}
              </FormGroup>
            </Col>
            <Col className='col-12'>
              <FormGroup>
                <Label>Comment</Label>
                <textarea className='form-control' id='comment' placeholder='Write your comment' {...register("comment", { required: "Comment is required", minLength: { value: 10, message: "Comment must be at least 10 characters" }, maxLength: { value: 300, message: "Comment cannot exceed 300 characters" } })}></textarea>
                {errors.comment && <span className='text-danger'>{errors.comment.message}</span>}
              </FormGroup>
              <Button type='submit' color="primary">
                Post Comment
              </Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
};

export default BlogCommentForm;

import { ImagePath } from "@/Constant";
import React from "react";
import { Button, Card, CardBody, CardHeader } from "reactstrap";

const BlogDetail = () => {
  return (
    <Card className='blog-detail'>
      <CardHeader className='pb-0 border-0'>
        <img className='img-fluid w-100' src={`${ImagePath}/blog/blog-detail.jpg`} alt='' />
      </CardHeader>
      <CardBody>
        <h4>Exploring the Intersection of Technology and Business</h4>
        <div className='post-social'>
          <ul className='d-flex align-items-center'>
            <li>25 March 2024</li>
            <li>
              <i className='fa fa-user mx-1'></i>Admin
            </li>
            <li>
              <i className='fa fa-comments mx-1'></i>12 Comments
            </li>
          </ul>
        </div>
        <div className='blog-share'>
          <Button color='primary' className="me-2">
            <i className='fa fa-share-alt'></i> 
          </Button> 
          <Button color='secondary'>
            <i className='fa fa-ellipsis-v'></i>
          </Button>
        </div>
        <p>Investigate how technology has empowered entrepreneurs to launch and scale their businesses more efficiently, from e-commerce platforms and mobile apps to digital payment systems and online marketing tools. Delve into the evolving landscape of cybersecurity threats and the importance of robust cybersecurity measures for safeguarding sensitive business data, maintaining customer trust, and mitigating cyber risks. Businesses are leveraging these technologies to enhance operations, improve efficiency, and drive innovation, the responsibility of businesses to use technology ethically and responsibly.</p>
        <div className='blog-quote'>
          <i className='fa fa-quote-left'></i>
          <p>Explore how businesses are undergoing digital transformation journeys to adapt to the digital age, streamline processes, and deliver enhanced customer experiences. Topics may include cloud computing, data analytics, and digital marketing strategies. Discuss the importance of data-driven decision-making processes in business, highlighting the use of big data analytics.</p>
        </div>
        <p>Consider the ethical and social implications of technological advancements in business, including privacy concerns, algorithmic bias, digital divide issues, and the responsibility of businesses to use technology ethically and responsibly. The importance of data-driven decision-making processes in business, highlighting the use of big data analytics, data visualization tools, and business intelligence platforms to extract actionable insights and drive strategic outcomes.</p>
      </CardBody>
    </Card>
  );
};

export default BlogDetail;

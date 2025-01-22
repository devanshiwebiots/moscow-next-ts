import React from "react";
import BlogSidebar from "../BlogDetailPage/BlogSidebar/BlogSidebar";
import { BloggridDetail } from "./BloggridDetail";
import LatestNews from "./LatestNews";
import { Col, Container, Row } from "reactstrap";

const BlogGrid = () => {
  return (
    <Container fluid className='blog-grid-page'>
      <Row>
        <Col xxl={9} xl={8} className='box-col-12'>
          <BloggridDetail/> 
          <LatestNews />
        </Col>
        <Col xxl={3} xl={4} className='blog-filter'>
          <BlogSidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default BlogGrid;

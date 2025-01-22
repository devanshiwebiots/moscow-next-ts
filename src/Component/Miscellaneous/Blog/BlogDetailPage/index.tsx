"use client";
import { Col, Row } from 'reactstrap';
import BlogSidebar from './BlogSidebar/BlogSidebar';
import BlogDetail from './BlogDetail/BlogDetail';
import BlogComments from './BlogComments/BlogComments';
import BlogCommentForm from './BlogCommentForm/BlogCommentForm';
 

const BlogDetailPage = () => {
  return (
    <div className="container-fluid blog-detail-page">
      <Row>
        <Col xxl={9} xl={8} className="box-col-12">
          <Row>
            <Col sm={12}>
              <BlogDetail/>
            </Col>
            <Col sm={12}>
              <BlogComments/>
            </Col>
            <Col sm={12}>
               <BlogCommentForm/>
            </Col>
          </Row>
        </Col>
        <Col xxl={3} xl={4} className="blog-filter">
          <BlogSidebar />
        </Col>
      </Row>
    </div>
  );
};

export default BlogDetailPage;

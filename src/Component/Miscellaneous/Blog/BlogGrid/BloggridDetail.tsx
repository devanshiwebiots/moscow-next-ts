import SVG from "@/CommonComponent/SVG";
import { ImagePath } from "@/Constant";
import { blogGridData } from "@/Data/Miscellaneous/Blog";
import Link from "next/link";
import { useState } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

export function BloggridDetail() {
  const [liked, setLiked] = useState(blogGridData.map(() => false));
  const toggleLike = (index: number) => {
    setLiked((prevLiked) => prevLiked.map((like, i) => (i === index ? !like : like)));
  };

  return (
    <Row>
      {blogGridData.map((blog,index) => (
        <Col xxl={4} xl={6} lg={4} sm={6} key={index}>
          <Card className='grid-cards'>
            <CardHeader className='p-0 border-0'>
              <img className='img-fluid' src={`${ImagePath}/${blog.image}`} alt='' />
            </CardHeader>
            <CardBody>
              <div className='d-flex gap-2 align-items-center'>
                <div className='flex-shrink-0'>
                  <img className='img-fluid' src={`${ImagePath}/${blog.avatar}`} alt='avatar' />
                </div>
                <div className='flex-grow-1'>
                  <h6>{blog.author}</h6>
                  <p className='mb-0'>{blog.date}</p>
                </div>
                <i className='fa fa-ellipsis-v'></i>
              </div>
              <h5>{blog.title}</h5>
              <p>
                {blog.description}
                <Link className='font-danger mx-1' href='#javascript'>
                  Read more...
                </Link>
              </p>
              <ul className='d-flex gap-3 justify-content-between'>
                <li>{blog.views}</li>
                <li className={`${liked[index] ? "clicked-color" : ""} blog-like`} onClick={() => toggleLike(index)}>
                  <SVG iconId={"blog-heart"} />
                </li>
              </ul>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

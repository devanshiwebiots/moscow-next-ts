import { ImagePath } from "@/Constant";
import { recentPosts } from "@/Data/Miscellaneous/Blog";
import React from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

export function RecentPost() {
  return (
    <Col sm={12}>
      <Card>
        <CardHeader className='pb-0 border-0'>
          <h5>Recent Posts</h5>
        </CardHeader>
        <CardBody>
          <ul className='recent-blog'>
            {recentPosts.map((post) => (
              <li key={post.id}>
                <div className='d-flex gap-2 align-items-start'>
                  <img className='img-fluid rounded' src={`${ImagePath}/${post.image}`} alt='Generic placeholder' />
                  <div className='flex-grow-1'>
                    <h6>{post.title}</h6>
                    <p>{post.date}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
}

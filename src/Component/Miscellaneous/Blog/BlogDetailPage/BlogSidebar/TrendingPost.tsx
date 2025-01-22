import { trendingPosts } from "@/Data/Miscellaneous/Blog";
import React from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

export function TrendingPost() {
  return (
    <Col sm={12}>
      <Card>
        <CardHeader className='pb-0 border-0'>
          <h5>Trending Posts</h5>
        </CardHeader>
        <CardBody>
          <ul className='recent-blog trending-blog'>
            {trendingPosts.map((post) => (
              <li key={post.id}>
                <div className='d-flex gap-2 align-items-start'>
                  <h5>{post.id}.</h5>
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

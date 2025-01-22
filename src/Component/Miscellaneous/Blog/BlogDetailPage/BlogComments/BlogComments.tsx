import { ImagePath } from "@/Constant";
import { comments } from "@/Data/Miscellaneous/Blog";
import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

const BlogComments = () => {
  return (
    <Card className='blog-comment'>
      <CardHeader className='pb-0 border-0'>
        <h4>Comments</h4>
      </CardHeader>
      <CardBody>
        <ul className='comment-section'>
          {comments.map((comment) => (
            <li key={comment.id}>
              <div className='d-flex'>
                <img src={`${ImagePath}/${comment.avatar}`} alt='Generic placeholder' />
                <div className='flex-grow-1'>
                  <h6>{comment.name}</h6>
                  <span>
                    ({comment.date}){" "}
                    <a className='ms-1' href='#'>
                      reply
                    </a>
                  </span>
                  <p>{comment.content}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default BlogComments;

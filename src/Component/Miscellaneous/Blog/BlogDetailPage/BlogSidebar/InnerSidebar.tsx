import React from "react";
import { TrendingPost } from "./TrendingPost";
import { Followus } from "./Followus";
import { RecentPost } from "./RecentPost";
import { PopularTag } from "./PopularTag";
import { Subscriber } from "./Subscriber";
import { SearchBlog } from "./SearchBlog";
import { Row } from "reactstrap";

export function InnerSidebar() {
  return (
    <Row className='blog-sidebar'>
      <SearchBlog />
      <TrendingPost />
      <Followus />
      <RecentPost />
      <PopularTag />
      <Subscriber />
    </Row>
  );
}

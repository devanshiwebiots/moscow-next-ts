import React, { useState } from "react";
import { InnerSidebar } from "./InnerSidebar";
import { Button } from "reactstrap";

const BlogSidebar = () => {
  const [open,setopen] = useState(false);

  const toggle = () =>{
    setopen(!open);
  }
  return (
    <div className='md-sidebar'>
      <Button color="primary" className={`email-aside-toggle md-sidebar-toggle`} onClick={toggle}>Blog Filter</Button>
      <div className={`md-sidebar-aside job-sidebar custom-scrollbar ${open?'open':''}`}>
        <InnerSidebar/> 
      </div>
    </div>
  );
};

export default BlogSidebar;

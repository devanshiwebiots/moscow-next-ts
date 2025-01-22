import { BlogDetailsProp } from "@/Types/LearningType";

const BlogDetails :React.FC<BlogDetailsProp>= ({ text, title }) => {
  return (
    <div className="blog-details-main">
      <ul className="blog-social justify-content-center">
        <li className="me-1">9 April 2024</li>
        <li className="me-1">by: Admin</li>
        <li className="me-1">0 Hits</li>
      </ul>
      <hr />
      <h6 className="f-w-600">{title}</h6>
      <p className="blog-bottom-details">{text}</p>
    </div>
  );
};

export default BlogDetails;
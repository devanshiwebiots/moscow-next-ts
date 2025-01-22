import { newsData } from "@/Data/Miscellaneous/Blog";
import React from "react";

const LatestNews = () => {
  return (
    <div className='col-sm-12'>
      <div className='card'>
        <div className='card-header pb-0 border-0'>
          <h5>Latest News and Trends</h5>
        </div>
        <div className='card-body'>
          <div className='row gy-3'>
            {newsData.map((news) => (
              <div className='col-xxl-6 col-xl-12 col-md-6' key={news.id}>
                <div className='blog-card'>
                  <h6>{news.title}</h6>
                  <p>{news.description}</p>
                  <div className='post-social'>
                    <ul className='d-flex align-items-center'>
                      <li className='bg-light-primary txt-primary'>{news.date}</li>
                      <li className='bg-light-secondary txt-secondary'>
                        <i className='fa fa-user mx-1'></i>
                        {news.author}
                      </li>
                      <li className='bg-light-info txt-info'>
                        <i className='fa fa-comments mx-1'></i>
                        {news.comments} Comments
                      </li>
                    </ul>
                  </div>
                  <a className='btn' href='blog-details.html'>
                    View more<i className='fa fa-long-arrow-right'></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;

import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    image:"https://www.heroesofdigital.com/wp-content/uploads/2025/02/Search-Engine-Marketing-Agency-Singapore-1-scaled-1.webp",
    link:"https://safarimarketingpro.com/",
    tittle:"10 Best Paid Ads Landing Pages to Inspire You",
  },
  {
    image:"https://www.heroesofdigital.com/wp-content/uploads/2025/02/Understanding-Improving-Cost-Per-Lead-scaled-1.webp",
    link:"https://safarimarketingpro.com/",
    tittle:"SEM Agency Singapore: An Introduction to Search Engine Marketing",
  },
  {
    image:"https://www.heroesofdigital.com/wp-content/uploads/2025/02/Search-Engine-Marketing-Agency-Singapore-1-scaled-1.webp",
    link:"https://safarimarketingpro.com/",
    tittle:"Understanding Average Cost Per Lead and Easy Ways to Improve It",
  },
];

const AddBlog = () => {
  return (
    <div className="row addblogbox">
      {data.map((item, index) => (
        <div className="col-md-4" key={index}>
          <div className="blog-card-box">
            <div className="blog-card-pic">
              <img src={item.image} alt={item.tittle} className="w-100" />
            </div>
            <h3>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.tittle}
              </a>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddBlog;

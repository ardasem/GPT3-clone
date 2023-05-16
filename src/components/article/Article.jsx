import React from "react";
import "./article.css";

function Article({ imgUrl, articleDate, blogHeading }) {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog image" />
      </div>

      <div className="gpt3__blog-container_article-content">
        <div>
          <p> {articleDate}</p>
          <h3>{blogHeading}</h3>
        </div>
        <p>Read Full Article</p>{" "}
      </div>
    </div>
  );
}

export default Article;
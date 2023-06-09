import React from "react";
import "./blog.css";
import {Article} from '../../components'
import {blog01,blog02,blog03,blog04,blog05} from './imports'


function Blog() {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          {" "}
          A lot is happening, We are blogging about it.
        </h1>
      </div>

      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} articleDate='Sep 26, 2021' blogHeading='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} articleDate='Sep 26, 2021' blogHeading='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgUrl={blog03} articleDate='Sep 26, 2021' blogHeading='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgUrl={blog04} articleDate='Sep 26, 2021' blogHeading='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgUrl={blog05} articleDate='Sep 26, 2021' blogHeading='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>

      </div>
    </div>
  );
}

export default Blog;

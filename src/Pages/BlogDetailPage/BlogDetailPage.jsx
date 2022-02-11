import React from "react";
import "../BlogDetailPage/BlogDetailPage.scss";

const BlogDetailPage = (props) => {
  const cardDetails = props.cardDetails;
  return (
    <div className="main-wrap">
      <div className="title-txt">BlogDetail Page</div>
      <div className="detail-wrap">
        <img className="img-part" src="https://picsum.photos/200" />
        <div class="header-txt">eum et est occaecati</div>
        <div class="subheader-txt">
          ullam et saepe reiciendis voluptatem adipisci\nsit amet autem
          assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur
          doloremque ipsam iure\nquis sunt voluptatem rerum illo velit
        </div>
      </div>
    </div>
  );
};
export default BlogDetailPage;

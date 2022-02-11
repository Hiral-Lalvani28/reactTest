import axios from "axios";
import React, { useEffect, useState } from "react";
import CardComponent from "../../Components/CardComponent/CardComponent";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { getPosts } from "../../Services/blogService";
import "../BlogPage/BlogPage.scss";
let START;
let LIMIT = 50;
let PAGE_NO = 0;
const BlogPage = () => {
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  useEffect(() => {
    fetchMoreListItems();
  }, []);

  //   async function fetchMoreListItems() {
  //     START = PAGE_NO === 0 ? 0 : PAGE_NO * LIMIT;
  //     const posts = await getPosts(START, LIMIT);
  //     PAGE_NO += 1;
  //     setIsFetching(false);
  //     setListItems([...listItems, ...posts]);
  //   }

  async function fetchMoreListItems() {
    START = PAGE_NO === 0 ? 0 : PAGE_NO * LIMIT;
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_start=${START}&_limit=${LIMIT}`
    );
    PAGE_NO += 1;
    setIsFetching(false);
    const posts = result.data;
    setListItems([...listItems, ...posts]);
  }

  return (
    <>
      <div className="main-wrap">
        <div className="title-txt">BlogPage</div>
        <div className="cards-wrap">
          {listItems.map((listItem) => (
            <CardComponent cardData={listItem} />
          ))}
        </div>
      </div>
      {isFetching && "Fetching more list items..."}
    </>
  );
};

export default BlogPage;

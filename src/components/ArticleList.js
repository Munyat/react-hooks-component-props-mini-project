import React from "react";
import Article from "./Article";
function ArticleList({ posts }) {
  console.log(posts);
  return (
    <main>
      {posts.map((postobj) => (
        <Article
          key={postobj.id}
          title={postobj.title}
          date={postobj.date}
          preview={postobj.preview}
          minutes={postobj.minutes}
        />
      ))}
    </main>
  );
}
export default ArticleList;

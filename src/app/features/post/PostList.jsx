import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionBtn from "./ReactionBtn";

const PostList = () => {
  const post = useSelector(selectAllPosts);
  const orderedPost = post.slice().sort((a,b)=> b.date.localeCompare(a.date))

  const renderedPost = orderedPost.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId}/>
        <TimeAgo timeStamp={post.date}/>
      </p>
      <ReactionBtn post = {post}/>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPost}
    </section>
  );
};

export default PostList;

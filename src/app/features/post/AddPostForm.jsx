import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAction.postAdded(title, content, userId));
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  return (
    <section>
      <h2>Add a new Post</h2>
      <form action="" onSubmit={onSavePostClicked}>
        <label htmlFor="postTitle">Post title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />

        <label htmlFor="postAuthor">Author:</label>
        <select
          name="postAuthor"
          id="postAuthor"
          value={userId}
          onChange={onAuthorChanged}
        >
            <option value=""></option>
            {userOptions}
        </select>

        <label htmlFor="postContent">Content: </label>
        <textarea
          name="postContent"
          id="postContent"
          cols="30"
          rows="10"
          value={content}
          onChange={onContentChanged}
        ></textarea>
        <button type="submit" disabled={!canSave}>Save post</button>
      </form>
    </section>
  );
};

export default AddPostForm;

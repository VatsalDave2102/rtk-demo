import { useDispatch } from "react-redux";
import { postAction } from "./postSlice";
import PropTypes from "prop-types"

const reactionEmoji = {
  thumbsUp: <span>👍</span> ,
  wow: <span>😯</span>,
  heart: <span>❤️</span>,
  rocket:  <span>🚀</span>,
  coffee:  <span>☕</span>,
};

const ReactionBtn = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButton = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(
            postAction.reactionAdded({ postId: post.id, reaction: name })
          )
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButton}</div>
};

ReactionBtn.propTypes = {
    post: PropTypes.object
}
export default ReactionBtn;

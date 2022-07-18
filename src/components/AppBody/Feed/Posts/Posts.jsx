import { Avatar } from "@mui/material";
import "./Posts.css";
import {
  ThumbUpAltOutlined,
  ChatOutlined,
  ShareOutlined,
  SendOutlined,
} from "@mui/icons-material";
import InputOptions from "../InputOptions/InputOptions";
const Posts = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl || null} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOptions Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOptions Icon={ChatOutlined} title="Like" color="Chat" />
        <InputOptions Icon={ShareOutlined} title="Like" color="Share" />
        <InputOptions Icon={SendOutlined} title="Like" color="Send" />
      </div>
    </div>
  );
};

export default Posts;

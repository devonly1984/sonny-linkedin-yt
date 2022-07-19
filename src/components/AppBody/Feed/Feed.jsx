import "./Feed.css";

import {
	CalendarViewDay,
	Create,
	EventNote,
	Image,
	Subscriptions,
} from "@mui/icons-material";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";

import InputOptions from "./InputOptions/InputOptions";
import Posts from "./Posts/Posts";
import { db } from "../../../config/firebase";

const Feed = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const q = query(collection(db, "posts"));
		const unsub = onSnapshot(q, (querySnapshot) => {
			console.log(querySnapshot);
			return setPosts(querySnapshot);
		});
		return unsub();
	}, []);
	const sendPost = (e) => {
		e.preventDefault();
		console.log(posts);
	};
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<Create />
					<form>
						<input type="text" />
						<button onClick={sendPost} type="submit">
							Send
						</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOptions Icon={Image} title="Photo" color="#70B5F9" />
					<InputOptions Icon={Subscriptions} title="Video" color="#E7A33E" />
					<InputOptions Icon={EventNote} title="Event" color="#C0CBCD" />
					<InputOptions
						Icon={CalendarViewDay}
						title="Write Article"
						color="#7FC15E"
					/>
				</div>
			</div>
			{posts.map((post) => {
				return (
					<Posts
						name={post.name}
						message={post.message}
						description={post.description}
						photoUrl={post.photoUrl}
					/>
				);
			})}
		</div>
	);
};

export default Feed;

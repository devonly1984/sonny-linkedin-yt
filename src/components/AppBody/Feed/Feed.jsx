import "./Feed.css";

import {
	CalendarViewDay,
	Create,
	EventNote,
	Image,
	Subscriptions,
} from "@mui/icons-material";

import InputOptions from "./InputOptions/InputOptions";

const Feed = () => {
	const submitHandler = () => {};
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<Create />
					<form onSubmit={submitHandler}>
						<input type="text" />
						<button type="submit">Send</button>
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
		</div>
	);
};

export default Feed;

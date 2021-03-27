import React, { useState, useEffect } from "react";
import "./css/Feed.css";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventIcon from "@material-ui/icons/Event";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import moment from "moment";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
function Feed() {
	const user = useSelector(selectUser);
	const [posts, setPosts] = useState([]);
	const [input, setInput] = useState("");
	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) =>
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);

	const sendPost = (e) => {
		e.preventDefault();
		if (input.trim() !== "") {
			db.collection("posts").add({
				name: user.displayName,
				description: user.email,
				message: input,
				photoUrl: user.photoUrl || "",
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			});
		}

		setInput("");
	};

	return (
		<div className='feed'>
			<div className='feed__inputContainer'>
				<div className='input'>
					<Avatar className='avatar__input' src={user?.photoUrl}>
						{user.displayName[0]}
					</Avatar>
					<div className='feed__input'>
						<form>
							<input
								type='text'
								value={input}
								onChange={(e) => setInput(e.target.value)}
								placeholder='Start a post'
							/>
							<button type='submit' onClick={sendPost}>
								Send
							</button>
						</form>
					</div>
				</div>
				<div className='feed__inputOptions'>
					<InputOption Icon={ImageIcon} title='Photo' color='#7085f9' />
					<InputOption Icon={YouTubeIcon} title='Video' color='#32CD32' />
					<InputOption Icon={EventIcon} title='Video' color='#FFA500' />
					<InputOption
						Icon={CalendarViewDayIcon}
						title='Write article'
						color='#FA8072'
					/>
				</div>
			</div>
			<FlipMove>
				{posts.map(
					({
						id,
						data: { name, description, message, photoUrl, timestamp },
					}) => (
						<Post
							key={id}
							name={name}
							description={description}
							message={message}
							photoUrl={photoUrl}
							time={moment(
								new Date(timestamp?.toDate()).toUTCString()
							).fromNow()}
						/>
					)
				)}
			</FlipMove>
		</div>
	);
}

export default Feed;

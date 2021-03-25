import React, { useState } from "react";
import "./css/Feed.css";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventIcon from "@material-ui/icons/Event";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";

function Feed() {
	const [posts, setPosts] = useState([]);

	const sendPost = (e) => {
		e.preventDefault();
    };

	return (
		<div className='feed'>
			<div className='feed__inputContainer'>
				<div className='input'>
					<Avatar className='avatar__input' />
					<div className='feed__input'>
						<form>
							<input type='text' placeholder='Start a post' />
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
			{posts.map((post) => (
				<Post />
			))}
			<Post
				name='Rustam Kolumbayev'
				description='this is a test'
				message='hey'
			/>
		</div>
	);
}

export default Feed;

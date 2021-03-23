import React from 'react'
import "./css/Feed.css"
import { Avatar } from "@material-ui/core";

function Feed() {
    return (
			<div className='feed'>
				<div className='feed__inputContainer'>
					<Avatar className="avatar__input" />
					<div className='feed__input'>
						<form>
							<input type='text' placeholder='Start a post' />
							<button type='submit'>Send</button>
						</form>
					</div>
                    <div className="feed__inputOptions">
                        
                    </div>
				</div>
			</div>
		);
}

export default Feed

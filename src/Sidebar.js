import React from "react";
import "./css/Sidebar.css";
import { Avatar } from "@material-ui/core";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {
	const user = useSelector(selectUser);

	const recentItem = (topic) => (
		<div className='sidebar__recentItem'>
			<span className='sidebar__hash'>#</span>
			<p>{topic}</p>
		</div>
	);
	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<img
					src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
					alt=''
				/>
				<Avatar src={user.photoUrl} className='sidebar__avatar'>
					{user.displayName[0]}
				</Avatar>
				<h2>{user.displayName}</h2>
				<h4>{user.email}</h4>
			</div>
			<div className='sidebar__stats'>
				<div className='sidebar__stat'>
					<p>Who viewed you</p>
					<p className='sidebar__statNumber'>2,546</p>
				</div>
				<div className='sidebar__stat'>
					<p>Views on post</p>
					<p className='sidebar__statNumber'>2,448</p>
				</div>
			</div>
			<div className='sidebar__bottom'>
				<p>Recent</p>
				{recentItem("react")}
				{recentItem("reactstrap")}
			</div>
		</div>
	);
}

export default Sidebar;

import React from 'react'
import './css/Header.css'
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from './HeaderOption';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
    return (
			<div className='header'>
				<div className='header__left'>
					<img
						src='https://image.flaticon.com/icons/png/512/174/174857.png'
						alt='linkedin icon'
					/>
					<div className='header__search'>
						<SearchIcon />
						<input type='text' placeholder='Search' />
					</div>
				</div>
				<div className='header__right'>
					<HeaderOption title='Home' Icon={HomeIcon} />
					<HeaderOption title='My Network' Icon={SupervisorAccountIcon} />
					<HeaderOption title='Jobs' Icon={BusinessCenterIcon} />
					<HeaderOption title='Messaging' Icon={ChatIcon} />
					<HeaderOption title='Notifications' Icon={NotificationsIcon} />
                    <HeaderOption avatar = "https://qph.fs.quoracdn.net/main-qimg-8f1f832ddb81325276a55d371b10d913" title ="Me"/>
				</div>
			</div>
		);
}

export default Header

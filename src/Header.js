import React from 'react'
import './css/Header.css'
import SearchIcon from "@material-ui/icons/Search";

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
						<input type='text' placeholder="Search" />
					</div>
				</div>
				<div className='header__right'>
                    
                </div>
			</div>
		);
}

export default Header

import React from "react";
import "./css/Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
	const newsArticle = (heading, subtitle) => (
		<div className='widgets__article'>
			<div className='widgets__articleLeft'>
				<FiberManualRecordIcon />
			</div>
			<div className='widgets__articleRight'>
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);
	return (
		<div className='widgets'>
			<div className='widgets__header'>
				<h2>Linkedin News</h2>
				<InfoIcon fontSize="small" />
			</div>
			{newsArticle("Linkedin clone created", "Top news- 1000 readers")}
			{newsArticle("Corona Virus in back", "Top news- 1000 readers")}
		</div>
	);
};

export default Widgets;

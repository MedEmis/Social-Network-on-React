import React from 'react'
import './news.scss';
import NewsItem from './NewsItem';




function News(props) {
	return (
		<>
			<div className="news__wrapper">
				<div className="news__title">Your News</div>
				<NewsItem />
			</div>
		</>
	);
}
export default News;
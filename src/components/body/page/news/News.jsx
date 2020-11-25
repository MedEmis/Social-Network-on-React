import React from 'react'
import './news.scss';
import NewsItem from './NewsItem';




class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}
	render() {
		return (
			<>
				<div className="news__wrapper">
					<div className="news__title">Your News</div>
					<NewsItem />
				</div>
			</>
		);
	}
}
export default News;
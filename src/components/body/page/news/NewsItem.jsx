import React from 'react'
import './news.scss';



class NewsItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	// deleteItem = (event) => {
	// 	let newsItem = event.target.parentNode.parentNode
	// 	newsItem.style.right = "150%"
	// 	setTimeout(() => newsItem.style.display = "none", 800);
	// }

	render() {
		return (
			<div className="news-item">
				
			</div>
		);
	}
}
export default NewsItem;
import React from 'react'
import './makeMessage.css';




const MakePost = () => {


	function auto_grow(event) {
		event.target.style.height = "5px";
		event.target.style.height = (event.target.scrollHeight) + "px";	
	}

	return (
		<div className="body-page__hero-posts">
			<div className="body-page__hero-posts-title">Add message</div>
			<div className="body-page__hero-posts-textarea">
				<textarea onInput={auto_grow} className="body-page__hero-posts-textarea-input" type="text" placeholder="some news?.." />
			</div>
			<div className="body-page__hero-posts-submit">
				<button type="submit" className="blue-btn" id="neon-text">Send</button>
			</div>
		</div>
	);

}
export default MakePost;
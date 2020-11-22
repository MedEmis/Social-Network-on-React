import React from 'react'


class SidebarNews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="body-sidebar__news-box">
				<div className="body-sidebar__news-box_title">NEWS</div>
				<div className="body-sidebar__news-box_body">No news yet</div>
			</div>
		);
	}
}
export default SidebarNews;
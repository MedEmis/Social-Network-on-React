import React from 'react'
import './postLog.css';
import PostItem from './PostItem';




class PostLog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nikName: 'MyName',
			dataDate: '23.11.2020',
			dataTime: '15:55',
			textBody: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque id molestiae ullam similique hic nulla consequuntur sint laboriosam facere soluta. Autem quo dolorem a accusantium dolore! Id a iusto sunt. Quod, autem aspernatur perspiciatis minima ipsam reiciendis eaque necessitatibus iste doloribus, nam harum alias? Omnis quas dolore rem quia cupiditate laborum at odit, maiores molestias? Vero praesentium dolorum mollitia iste? Molestias consectetur voluptate vitae perferendis nemo dignissimos aperiam suscipit",

		};
	}
	render() {
		return (
			<div className="body-page__hero-posts-log">
				<PostItem nikName={this.state.nikName} dataDate={this.state.dataDate} dataTime={this.state.dataTime} textBody={this.state.textBody}/>
				<PostItem />
				{/* <PostItem />
				<PostItem />
				<PostItem />
				<PostItem />
				<PostItem />
				<PostItem /> */}
			</div>
		);
	}
}
export default PostLog;
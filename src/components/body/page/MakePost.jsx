import React from 'react'
import './makeMessage.css';




class MakePost extends React.Component {
	constructor(props) {
		super(props);
		let today = new Date()
		let hours = today.getHours()
		let minutes = today.getMinutes()
		let day = today.getDate()
		let month = today.getMonth() + 1
		let year = today.getUTCFullYear()
		this.state = {
			postInfo: {
				nikName: this.props.nikName,
				dataDate: `${day}.${month}.${year}`,
				dataTime: `${hours}:${minutes}`,
				textBody: null
			}
		};
		//console.log(`dataDate=  ${this.state.postInfo.dataDate} dataTime=  ${this.state.postInfo.dataTime}`)
	}

	auto_grow = (event) => {
		event.target.style.height = "5px";
		event.target.style.height = (event.target.scrollHeight) + "px";
	}
	addNewPost = () => {
		let textArea = document.querySelector(".body-page__hero-posts-textarea-input")
		let postLog = document.querySelector(".body-page__hero-posts-log")
		let post = `<PostItem nikName=${"NEWNAME"} dataDate=${"33.33.33"} dataTime=${'88.88'} textBody=${textArea.value}/> `
		this.setState({ postInfo: { textBody: textArea.value } })
		console.log(this.state.postInfo.textBody)

		//console.log(`dataDate= ${this.state.postInfo.dataTime}`)
	}
	render() {
		return (
			<div className="body-page__hero-posts">
				<div className="body-page__hero-posts-title">Add message</div>
				<div className="body-page__hero-posts-textarea">
					<textarea onInput={this.auto_grow} className="body-page__hero-posts-textarea-input" type="text" placeholder="some news?.." />
				</div>
				<div className="body-page__hero-posts-submit">
					<button onClick={this.addNewPost} type="submit" className="blue-btn" id="neon-text">Publish</button>
				</div>
			</div>
		);
	}
}


export default MakePost;


// class Test extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.addChild = this.addChild.bind(this)
// 		this.state = {
// 			components: [
// 				{
// 					id: 1, name: 'Some Name'
// 				}
// 			]
// 		}
// 	}
// 	addChild() {
// 		// Изменение стейта спровоцирует перерисовку
// 		this.setState(this.state.concat([
// 			{ id: 2, name: "Another Name" }
// 		]))
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1>App main component! </h1>
// 				<button onClick={this.addChild}>Add component</button>
// 				{ // здесь будет отрисовано необходимое кол-во компонентов
// 					this.state.components.map((item) => (
// 						<SampleComponent key={item.id} name={item.name} />
// 					))
// 				}
// 			</div>
// 		);
// 	}
// }
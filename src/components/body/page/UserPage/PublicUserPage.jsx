import React from 'react'
import './usersPage.scss';
import UsersPageItem from './UsersPageItem';
import defaultAvatar from "./../../../../images/defaultUser.png"
import * as axios from "axios"
import './../../preloader.scss';

let classNames = require('classnames');



class UsersPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false
		}
		this.totalCount = 0
		this.pagesArray = []
		//console.log("Props userBase", this.props.userBase)
	}
	// loadData = () => {
	// 	if (!this.pagesArray.length) {
	// 		this.setState({ isLoading: true })
	// 		axios.get(
	// 			`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentUsersPage}&count=${this.props.displayedUsers} `
	// 		)
	// 			.then(response => {
	// 				this.totalCount = response.data.totalCount
	// 				if (this.pagesArray.length < response.data.items.length) {
	// 					this.props.setUsers(response.data.items, response.data.totalCount)
	// 				}
	// 				this.setState({ isLoading: false })
	// 			})
	// 	}
	// }
	componentDidMount() {
		if (!this.pagesArray.length) {
			this.setState({ isLoading: true })
			axios.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentUsersPage}&count=${this.props.displayedUsers} `
			)
				.then(response => {
					this.totalCount = response.data.totalCount
					if (this.pagesArray.length < response.data.items.length) {
						this.props.setUsers(response.data.items, response.data.totalCount)
					}
					this.setState({ isLoading: false })
				})
		}
	}
	render() {
		let pagesCount = Math.ceil(this.totalCount / this.props.displayedUsers)
		for (let i = 1; i <= pagesCount; i++) {
			this.pagesArray.push(i)
		}
		return (
			<div className="userPage__wrapper">
				{
					this.state.isLoading
						? <section><span className="load"></span></section>
						: <>
							{
								this.props.userBase
									//.slice(0, showItem)  =>to show only some elements
									? this.props.userBase.slice(0, this.props.displayedUsers).map((user, index) => (user ? <UsersPageItem
										key={this.props.userBase[index].userId}
										//data
										userBase={this.props.userBase}
										currentUserId={this.props.currentUserId}
										// userAvatar={this.props.userBase[index].photos.large
										// 	? this.props.userBase[index].photos.large
										// 	: defaultAvatar}
										userAvatar={this.props.userBase[index].avatarUrl
											? this.props.userBase[index].avatarUrl
											: defaultAvatar}
										userName={this.props.userBase[index].name}
										registerDate={this.props.userBase[index].registerDate}
										userId={this.props.userBase[index].userId}
										statusText={this.props.userBase[index].statusText}
										//functions
										toFollow={this.props.toFollow}
										toChat={this.props.toChat}
									/> : null))
									: null
							}
							<ul className="userPage__pagination-list">
								<span className="userPage__pagination-list_navig" onClick={(event) => {
									//this.loadData()
									this.props.ChangePage(event)
								}}  >prev</span>
								<div className="userPage__pagination-list_pages-container" >
									{/* creating pagination and comparing it with state current selected page */}
									{this.pagesArray.slice(0, 10).map(item => <li className={classNames("userPage__pagination-list_item", { " active": item === this.props.currentUsersPage })}
										key={item} name={item} onClick={(event) => {
											this.props.ChangePage(event)
											//this.loadData()
											this.setState({ isLoading: false })
										}}>{item}</li>)}
								</div>
								<span className="userPage__pagination-list_navig" onClick={(event) => {
									//this.loadData()
									this.props.ChangePage(event)
								}}  >next</span>
								<span className="userPage__pagination-list_total" >total: {this.totalCount}</span>
							</ul>
						</>
				}
			</div>
		)
	}
}
export default UsersPage;




{/* <div className="userPage__wrapper">
				{
					props.userBase
						//.slice(0, showItem)  =>to show only some elements
						? userBaseArray.slice(0, showItem).map((user, index) => (user ? <UsersPageItem
							key={userBaseArray[index].userId}
							//data
							userBase={props.userBase}
							currentUserId={props.currentUserId}
							userAvatar={userBaseArray[index].avatarUrl
								? userBaseArray[index].avatarUrl
								: defaultAvatar}
							userName={userBaseArray[index].name}
							registerDate={userBaseArray[index].registerDate}
							userId={userBaseArray[index].userId}
							statusText={userBaseArray[index].statusText}
							//functions
							toFollow={props.toFollow}
							toChat={props.toChat}
						/> : null))
						: null
				}
				<button className="body-page__authorization_button"
					onClick={() => setShowItem(showItem + 4)}
				>Show More</button>
			</div> */}
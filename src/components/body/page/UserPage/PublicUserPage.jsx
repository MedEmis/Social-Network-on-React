import React from 'react'
import './usersPage.scss';
import * as axios from "axios"
import './../../preloader.scss';
import UsersPageContent from './UserPageContent';
let classNames = require('classnames');



class UsersPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
		}
		this.totalCount = 0
		this.pagesArray = []
	}
	//==================================================================================================================================
	async dataLoad() {
		this.setState({ isLoading: true })
		await axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentUsersPage}&count=${this.props.displayedUsers} `,
			{ withCredentials: true }
		)
			.then(response => {
				this.props.setUsers(response.data.items, response.data.totalCount)
			})
		this.setState({ isLoading: false })
	}
	//==================================================================================================================================
	async followRequest(event) {
		// "API-KEY":'6f029e5f-48f9-458c-ac33-6b805ca9e34e'
		let method = event.target.textContent.toLocaleLowerCase()
		let id = event.target.offsetParent.childNodes[0].childNodes[1].textContent
		console.log("method",method)
		if (method === "follow") {
			await axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
				withCredentials: true,
				headers: {
					"API-KEY": "2dfa7780-67c5-4719-a0fd-058e0a7328bb"
				}
			})
				.then(response => {
					if (response.data.resultCode === 0) {
						console.log(response)
					} else {
						console.log("FAIL")
						console.log(response)
					}
				})
		} else if (method === "unfollow") {
			await axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
				withCredentials: true,
				headers: {
					"API-KEY": "2dfa7780-67c5-4719-a0fd-058e0a7328bb"
				}
			})
				.then(response => {
					if (response.data.resultCode === 0) {
						console.log(response)
					} else {
						console.log("FAIL")
					}
				})
		}

	}
	//==================================================================================================================================
	componentDidMount() { if (!this.pagesArray.length) { this.dataLoad() } }
	//==================================================================================================================================
	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.displayedUsers)
		for (let i = 1; i <= pagesCount; i++) {
			this.pagesArray.push(i)
		}
		return (
			<div className="userPage__wrapper">
				{
					this.state.isLoading
						? <section className="load-wrapper"><span className="load"></span></section>
						: <UsersPageContent
							//data
							userBase={this.props.userBase}
							currentUserId={this.props.currentUserId}
							currentUsersPage={this.props.currentUsersPage}
							pagesArray={this.pagesArray}
							totalCount={this.totalCount}
							displayedUsers={this.props.displayedUsers}
							//functions
							toFollow={this.props.toFollow}
							followRequest={this.followRequest}
							toChat={this.props.toChat}
						/>
				}
				<ul className="userPage__pagination-list">
					<span className="userPage__pagination-list_navig" onClick={this.props.currentUsersPage > 1 ? (event) => {
						this.props.ChangePage(event)
						setTimeout(() => 200)
						this.dataLoad()
					} : null
					}  >prev</span>
					<div className="userPage__pagination-list_pages-container" >
						{/* creating pagination and comparing it with state current selected page */}
						{this.pagesArray.slice(0, 10).map(item => <li className={classNames("userPage__pagination-list_item", { " active": item === this.props.currentUsersPage })}
							key={item} name={item} onClick={(event) => {
								this.props.ChangePage(event)
								setTimeout(() => 200)
								this.dataLoad()
							}}>{item}</li>)}
					</div>
					<span className="userPage__pagination-list_navig" onClick={(event) => {
						this.props.ChangePage(event)
						setTimeout(() => 200)
						this.dataLoad()
					}}  >next</span>
					<span className="userPage__pagination-list_total" >Pages total: {pagesCount}</span>
				</ul>
			</div >
		)
	}
}
export default UsersPage;



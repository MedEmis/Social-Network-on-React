import React from 'react'
import './usersPage.scss';
import './../../preloader.scss';
import UsersPageContent from './UserPageContent';
import { userAPI } from "./../../../../API"
import { Redirect } from 'react-router-dom';

let classNames = require('classnames');



class UsersPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
		this.totalCount = 0
		this.pagesArray = []
	}
	//==================================================================================================================================
	followRequest = (event) => { userAPI.followRequest(event, this.props.toFollow, this.props.currentUserId) }
	//==================================================================================================================================
	componentDidMount() { if (!this.pagesArray.length) { this.props.GetUsers(localStorage.getItem("currentUserPage"), this.props.displayedUsers) } }
	//==================================================================================================================================
	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.displayedUsers)
		for (let i = 1; i <= pagesCount; i++) {
			this.pagesArray.push(i)
		}
		//if (this.props.isAuthorized) {
			return (
				<div className="userPage__wrapper">
					{
						this.props.isFetching
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
								followRequest={this.props.toFollow}
								toChat={this.props.toChat}
							/>
					}
					<ul className="userPage__pagination-list">
						<span className="userPage__pagination-list_navig" onClick={this.props.currentUsersPage > 1 ? (event) => {
							this.props.ChangePage(event)
							this.props.GetUsers(localStorage.getItem("currentUserPage"), this.props.displayedUsers)
						} : null
						}  >prev</span>
						<div className="userPage__pagination-list_pages-container" >
							{/* creating pagination and comparing it with state current selected page */}
							{this.pagesArray.slice(0, 10).map(item => <li className={classNames("userPage__pagination-list_item", { " active": item === this.props.currentUsersPage })}
								key={item} name={item} onClick={(event) => {
									this.props.ChangePage(event)
									this.props.GetUsers(localStorage.getItem("currentUserPage"), this.props.displayedUsers)
								}}>{item}</li>)}
						</div>
						<span className="userPage__pagination-list_navig" onClick={(event) => {
							this.props.ChangePage(event)
							this.props.GetUsers(localStorage.getItem("currentUserPage"), this.props.displayedUsers)
						}}  >next</span>
						<span className="userPage__pagination-list_total" >Pages total: {pagesCount}</span>
					</ul>
				</div >
			)
		//} else {
			// return (
			// 	<Redirect to="/" />
			// )
		//s}
	}
}
export default UsersPage;



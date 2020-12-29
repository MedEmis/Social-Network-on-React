import React from 'react'
import './usersPage.scss';
import UsersPageContent from './UserPageContent';
import { userAPI } from "./../../../../API"
import Pagination from './Pagination';
import Loader from './../../Loader';




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
		return (
			<div className="userPage__wrapper">
				{
					this.props.isFetching
						? <Loader />
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
				<Pagination
					//data
					currentUsersPage={this.props.currentUsersPage}
					displayedUsers={this.props.displayedUsers}
					pagesArray={this.pagesArray}
					pagesCount={pagesCount}
					pagesSet={10}
					//functions
					ChangePage={this.props.ChangePage}
					GetUsers={this.props.GetUsers}
				/>
			</div >
		)
	}
}
export default UsersPage;


import React from 'react'
import './usersPage.scss';
import * as axios from "axios"
import './../../preloader.scss';
import UsersPageContent from './PublicUserPageContent';



class UsersPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
		}
		this.totalCount = 0
		this.pagesArray = []
		console.log("UsersPage", this.props.currentUsersPage)

	}
	async componentDidMount() {
		console.log("did mount")
		if (!this.pagesArray.length) {
			this.setState({ isLoading: true })
			await axios.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentUsersPage}&count=${this.props.displayedUsers} `
			)
				.then(response => {
					this.totalCount = response.data.totalCount
					if (this.pagesArray.length < response.data.items.length) {
						this.props.setUsers(response.data.items, response.data.totalCount)
					}
				})
			this.setState({ isLoading: false })
		}
	}
	async onPageChanged() {
		this.setState({ isLoading: true })
		await axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentUsersPage}&count=${this.props.displayedUsers} `
		)
			.then(response => {
				this.props.setUsers(response.data.items, response.data.totalCount)
			})
		this.setState({ isLoading: false })
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
							toChat={this.props.toChat}
							onPageChanged={this.onPageChanged.bind(this)}
							ChangePage={this.props.ChangePage}
						/>
				}
			</div>
		)
	}
}
export default UsersPage;



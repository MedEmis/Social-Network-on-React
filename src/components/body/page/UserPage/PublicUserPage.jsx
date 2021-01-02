import React, { useContext, useEffect } from 'react'
import './usersPage.scss';
import UsersPageContent from './UserPageContent';
import Pagination from './Pagination';
import Loader from './../../Loader';
import { ThemeContext } from '../../../../redux/ThemeContext';


function UsersPage(props) {
	let totalCount = 0
	let pagesArray = []
	let pagesCount = Math.ceil(props.totalUsersCount / props.displayedUsers)
	for (let i = 1; i <= pagesCount; i++) {
		pagesArray.push(i)
	}
	const lightTheme = useContext(ThemeContext)
	useEffect(() => {
		if (!pagesArray.length) {
			props.GetUsers(localStorage.getItem("currentUserPage"), props.displayedUsers)
		}
	})

	return (
		<div className="userPage__wrapper" style={{ background: lightTheme ? " rgb(213, 205, 205)" : "rgb(63, 60, 60)" }}>
			{
				props.isFetching
					? <Loader />
					: <UsersPageContent
						//data
						userBase={props.userBase}
						currentUserId={props.currentUserId}
						currentUsersPage={props.currentUsersPage}
						pagesArray={pagesArray}
						totalCount={totalCount}
						displayedUsers={props.displayedUsers}
						//functions
						followRequest={props.toFollow}
						toChat={props.toChat}
					/>
			}
			<Pagination
				//data
				currentUsersPage={props.currentUsersPage}
				displayedUsers={props.displayedUsers}
				pagesArray={pagesArray}
				pagesCount={pagesCount}
				pagesSet={10}
				//functions
				ChangePage={props.ChangePage}
				GetUsers={props.GetUsers}
			/>
		</div >
	)
}

export default UsersPage;
import React from 'react'
let classNames = require('classnames');

function Pagination({ currentUsersPage, displayedUsers, pagesArray, pagesCount, pagesSet, ChangePage, GetUsers }) {
	const [initPage, setInitPage] = React.useState(0)
	const [lastPage, setLastPage] = React.useState(pagesSet)

	return (
		<ul className="userPage__pagination-list">
			<span className="userPage__pagination-list_navig prev" onClick={currentUsersPage > 1 ? (event) => {
				ChangePage(event)
				if (initPage >= 1) {
					setInitPage(init => init - 1)
					setLastPage(last => last - 1)
				}
				GetUsers(localStorage.getItem("currentUserPage"), displayedUsers)
			} : null
			} name="prev" />
			<div className="userPage__pagination-list_pages-container" >
				{/* creating pagination and comparing it with state current selected page */}
				{pagesArray.slice(initPage, lastPage).map(item => <li className={classNames("userPage__pagination-list_item", { " active": item === currentUsersPage })}
					key={item} name={item} onClick={(event) => {
						ChangePage(event)
						GetUsers(localStorage.getItem("currentUserPage"), displayedUsers)
					}}>{item}</li>)}
			</div>
			<span className="userPage__pagination-list_navig next" onClick={(event) => {
				ChangePage(event)
				if (currentUsersPage >= pagesSet) {
					setInitPage(init => init + 1)
					setLastPage(last => last + 1)
				}
				GetUsers(localStorage.getItem("currentUserPage"), displayedUsers)
			}} name="next" />
			<span className="userPage__pagination-list_total" >Pages total: {pagesCount}</span>
		</ul>
	)
}
export default Pagination
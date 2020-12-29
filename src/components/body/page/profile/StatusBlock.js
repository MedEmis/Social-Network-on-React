import React, { useState, useEffect } from 'react'


function StatusBlock({ getStatus, setStatus, userId, userStatus }) {
	const [isTyping, setIsTyping] = useState(false)
	const [statusText, setUserStatus] = useState()
	useEffect(() => {
		setUserStatus(userStatus)
		getStatus(userId)
	})
	return (
		<div className="body-page__background_status"
			onDoubleClick={() => setIsTyping(true)}
		>
			{isTyping
				? <input onBlur={(event) => {
					setIsTyping(false)
					setStatus(event)
				}}	defaultValue={statusText}
					className="body-page__background_status-input" placeholder="enter your status" autoFocus={true} maxLength="35" />
				: <span className="body-page__background_status-text">{statusText || "double click to set status"}</span>
			}
		</div>
	)
}
export default StatusBlock
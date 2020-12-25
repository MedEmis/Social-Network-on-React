import React, { useState } from 'react'


function StatusBlock(props) {
	const [isTyping, setIsTyping] = useState(false)
	return (
		<div className="body-page__background_status"
			onDoubleClick={() => setIsTyping(true)}
		>
			{isTyping
				? <input onBlur={(event) => {
					setIsTyping(false)
					props.setStatus(event)
				}} className="body-page__background_status-input" placeholder="enter your status" autoFocus={true} maxLength = "35"/>
				: <span className="body-page__background_status-text">{props.userStatus || "double click to set status"}</span>
			}
		</div>
	)
}
export default StatusBlock
import React, { useState } from 'react'
let classNames = require('classnames');


function PostReplyTextarea(props) {
	const [IsTextOpen, setIsTextOpen] = useState(false)
	console.log(props)
	return (
		<>
			<div onClick={() => setIsTextOpen(true)} type="submit" className="hero-posts-log-item__button-reply">Reply</div>
			<div className={classNames(" body-page__reply-textarea", { " visible": IsTextOpen })}>
				<textarea
					onInput={(event) => props.autoGrow(event)}
					className="body-page__reply-textarea-input" type="text"
					defaultValue={`Answer to ${props.nikName === null || props.nikName === undefined ? "anonymous" : props.nikName}:---`} />
				<div className="body-page__reply-textarea-buttons">
					<button onClick={() => setIsTextOpen(false)} type="submit" className="red-btn" id="neon-text">Close</button>
					<button onClick={(event) => {
						props.addNewReply(event, props)
						setIsTextOpen(true)
					}
					} type="submit" className="blue-btn" id="neon-text">Publish</button>
				</div>
			</div>
		</>
	)
}
export default PostReplyTextarea
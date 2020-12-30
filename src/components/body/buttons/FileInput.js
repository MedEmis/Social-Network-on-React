import React from 'react'
import './buttons.scss'
function FileInput({ label, saveImage }) {
	return (
		<div className="buttons__file-input ">
			<label className="buttons__file-input_label " htmlFor="change_avatar" >{label}</label>
			<input onChange={(event) => saveImage(event.target.files[0])} className="buttons__file-input_input " type="file" id="change_avatar" accept=".jpg, .jpeg, .png" />
		</div>
	)
}
export default FileInput
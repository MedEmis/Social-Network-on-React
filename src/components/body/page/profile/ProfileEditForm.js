import React from 'react'
import { Form, Field } from 'react-final-form'
import "./formEdit.scss"
let classNames = require('classnames');

function InputBlock({ id, type, required, label, name, component }) {
	return (
		<div className="profile-editor-form__input-field input-field col s12">
			<Field id={id} type={type} name={name} component={component} required={required} defaultValue={null}
				className="profile-editor-form__input-field_input validate" />
			<label htmlFor={name}>{label}</label>
		</div>
	)
}

function ProfileEditForm({ profile, userId, updateProfile, formEdit, hideForm }) {
	return (
		<div className={classNames("profile-editor-form", { " hidden": formEdit })} >
			<Form
				onSubmit={(event) => {
					updateProfile(event)
					hideForm()
				}}
				render={({ handleSubmit, form, submitting, pristine }) => (
					<form onSubmit={handleSubmit}>
						<Field name={"userId"} defaultValue={+userId} style={{ visibility: "hidden" }} component={"input"} />
						<InputBlock component={"input"} type={"text"} label={"Your full name"} id={"fullName"} name={"fullName"} required={true} />
						<InputBlock component={"input"} type={"text"} label={"If you looking for job?"} id={"lookingForAJob"} name={"lookingForAJobDescription"} required={false} />
						<InputBlock component={"input"} type={"email"} label={"Your E-mail"} id={"email"} name={"email"} required={true} />
						<InputBlock component={"textarea"} type={"text"} label={"Something about you and your job?"} name={"aboutMe"} required={false} />
						{
							Object.keys(profile.contacts).map(key => <InputBlock
								key={key} component={"input"} type={"url"} label={key} id={key} name={`contacts.${key}`} required={false} />
							)
						}
						<button type="submit" disabled={submitting || pristine} className="body-page__authorization_button ">Submit changes</button>
						<button onClick={() => {
							form.reset()
							hideForm()
						}} type="reset" className="body-page__authorization_button ">Cancel</button>
					</form>
				)}
			/>
		</ div>
	)
}
export default ProfileEditForm;

import React from 'react'
import './music.scss';
import MusicItem from './MusicItem';




class Music extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}
	render() {
		return (
			<>
				<div className="music__wrapper">
					<div className="music__title">Your favorite music</div>
					<MusicItem />
				</div>
			</>
		);
	}
}
export default Music;
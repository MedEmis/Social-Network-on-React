import React from 'react'
import './music.scss';
import MusicItem from './MusicItem';




function Music(props) {
	return (
		<>
			<div className="music__wrapper">
				<div className="music__title">Your favorite music</div>
				<MusicItem />
			</div>
		</>
	);
}
export default Music;
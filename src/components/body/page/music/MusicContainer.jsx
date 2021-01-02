import React, { useContext } from 'react'
import { ThemeContext } from '../../../../redux/ThemeContext';
import './music.scss';
import MusicItem from './MusicItem';




function Music(props) {
	const lightTheme = useContext(ThemeContext)
	return (
		<>
			<div className="music__wrapper" style={{ background: lightTheme ? " rgb(206, 203, 203)" : "rgb(63, 60, 60)" }}>
				<div className="music__title">Your favorite music</div>
				<MusicItem />
			</div>
		</>
	);
}
export default Music;
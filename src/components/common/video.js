import React ,{useEffect}from 'react'
import $ from 'jquery';
import {Link} from 'react-router-dom'

function Video(){
	useEffect(() => {
    $("#video_player")[0].play();
  },[]);

	return(
		<div>
			<video width="100%" height="300px" controls id="video_player" autoplay contenteditable="false">
				<source src="video/video.mp4" type="video/mp4"/>
			</video>
			<Link></Link>
		</div>

		)
}
export default Video;
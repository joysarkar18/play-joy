import {BiPlayCircle } from "react-icons/bi"
import {AiOutlinePauseCircle} from "react-icons/ai"
const PlayPause = (props) =>

{
  if(props.song.title===props.activeSong.title){
    return (
      <div>
        <AiOutlinePauseCircle size={70} className="text-gray-300" onClick={props.handlePause}></AiOutlinePauseCircle>
      </div>
    );
  }
  else{

  
  return (
  <div>
    <BiPlayCircle size={70} className="text-gray-300" onClick={props.handlePlay}></BiPlayCircle>
  </div>

  
)
  }
};

export default PlayPause;

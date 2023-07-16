import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, index , isPlaying , activeSong , data }) =>{
  const dispatch = useDispatch()
  
  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = () => {
    console.log("play - clicked");
      dispatch(setActiveSong({song, data , index}))
      dispatch(playPause(true)) 
  }
  
  return (
  
  <div
    className="flex flex-col w-[300px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg "
    key={song.key}
  >
    <div className="relative w-full h-full group cursor-pointer">
      <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex z-10 group-hover:scale-105 duration-500 rounded-lg mb-3 ${activeSong.title===song.title ? "flex bg-black bg-opacity-70" : "hidden"}`}>
        <PlayPause song={song} handlePause = {handlePauseClick} handlePlay={handlePlayClick} isPlaying={isPlaying} activeSong={activeSong}></PlayPause>
      </div>
      <img className="group-hover:scale-105 duration-500 rounded-lg mb-3" src={song.images.coverart}></img>
      
       
    </div>

    <div  className="" > 
        <p className="text-left overflow-hidden text-gray-300 truncate font-semibold text-lg">{song.title}</p>
        <Link to="/artist">
        <p className="text-gray-300">{song.subtitle}</p>
        </Link>
      </div>
    
  </div>
)};

export default SongCard;

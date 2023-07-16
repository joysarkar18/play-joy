
import { useDispatch, useSelector } from "react-redux";
import { genres } from "../assets/constants";
import { Error, Loader, SongCard } from "../components";
import { useGetMusicListQuery } from "../redux/APIs/sazamApi";
const Discover = () => {
    const dispatch = useDispatch();
    const {activeSong,isPlaying} = useSelector((state) => state.player)
    const {data , isFaching , error } = useGetMusicListQuery();
    console.log(data);
    const genreTitle = "Pop"


    if(isFaching){
        return <Loader></Loader>
    }

    if(error){
        return <Error></Error>
    }
    return(
    <div className="flex flex-col">
        <div className="w-full flex sm:flex-row  flex-col justify-between items-center mt-4 mb-10">
            <h1 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h1>
            <select className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-4">
                {genres.map((genre)=>{
                    return (
                        <option key={genre.value} value={genre.value}>{genre.title}</option>
                    );
                })}
            </select>

        </div>

        <div className="flex flex-wrap gap-8">
           {data?.tracks.map((song , i) => {
            return <SongCard key={song.key}  song={song} index = {i} activeSong = {activeSong} isPlaying={isPlaying} data = {data}></SongCard>
           })}

        </div>

    </div>
    );

};

export default Discover;

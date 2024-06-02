import { useEffect, useState } from "react";
import { API } from "../utils/constants";
import VideoCard from "./VideoCard";
import ButtonList from "./ButtonList";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(API);
    const json = await data.json();
    setVideos(json.items);
    console.log(json.items);
  };

  return (
    <div className="flex flex-wrap justify-center">
      <ButtonList />
      <div className="flex flex-wrap justify-center">
        {videos?.map((video) => (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default VideoContainer;

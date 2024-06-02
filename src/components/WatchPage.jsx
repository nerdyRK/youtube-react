import { useEffect } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const id = params.get("v");

  useEffect(() => {
    dispatch(closeMenu(false));
  }, []);
  return (
    <div>
      <iframe
        width="866"
        height="487"
        src={"https://www.youtube.com/embed/" + `${id}`}
        title="Youtube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default WatchPage;

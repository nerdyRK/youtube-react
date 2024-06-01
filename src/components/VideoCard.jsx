const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount, likeCount } = statistics;
  return (
    <div className="p-2 w-80 shadow-lg m-2">
      <img src={thumbnails.medium.url} alt="" />
      <div>
        <p className="font-bold mt-2">{title}</p>
        <p className="font-bold mt-1">{channelTitle}</p>
        <p>{viewCount} Views</p>
        <p>{likeCount} Likes</p>
      </div>
    </div>
  );
};
export default VideoCard;

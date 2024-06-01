const ButtonList = () => {
  const tabs = [
    "All",
    "Coding",
    "Gaming",
    "Comedy",
    "Movies",
    "Series",
    "Action",
    "Study",
    "music",
    "news",
    "Sports",
    "Trending",
    "Travel",
    "Tech",
  ];
  return (
    <div>
      {tabs.map((tab, i) => (
        <button
          key={i}
          className="border px-4 m-2 py-1 rounded-xl bg-gray-100 border-gray-400"
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
export default ButtonList;

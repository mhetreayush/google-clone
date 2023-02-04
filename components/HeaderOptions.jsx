import {
  HiDotsVertical,
  HiMap,
  HiNewspaper,
  HiPhotograph,
  HiPlay,
  HiSearch,
} from "react-icons/hi";
const HeaderOptions = () => {
  const options = [
    {
      icon: <HiSearch />,
      title: "All",
      selected: true,
    },
    {
      icon: <HiPhotograph />,
      title: "Images",
    },
    {
      icon: <HiPlay />,
      title: "Videos",
    },
    {
      icon: <HiNewspaper />,
      title: "News",
    },
    {
      icon: <HiMap />,
      title: "Maps",
    },
    {
      icon: <HiDotsVertical />,
      title: "More",
    },
  ];
  const HeaderOption = ({ option }) => {
    const { icon, title, selected } = option;
    return (
      <button
        className={`flex space-x-1 ${
          selected && "text-blue-500 border-blue-500"
        } items-center border-b-4 border-transparent hover:border-blue-500 pb-3`}
      >
        {icon}
        <p className="hidden sm:inline-flex">{title}</p>
      </button>
    );
  };

  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      {/* Left */}
      <div className="flex space-x-6">
        {/* <HeaderOption icon={<HiSearch />} title="" /> */}
        {options.map((option, idx) => {
          return <HeaderOption option={option} key={idx} />;
        })}
      </div>
      {/* Right */}
      <div className="flex space-x-4">
        <p>Settings</p>
        <p>Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;

import Image from "next/image";

const Avatar = () => {
  return (
    <div>
      <Image
        className="h-10 w-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
        src={require("./myPic.jpg")}
      />
    </div>
  );
};

export default Avatar;

import Head from "next/head";
import Image from "next/image";
import { BsGridFill } from "react-icons/bs";
import { HiMicrophone } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";
const Home = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search/?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-small text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <a className="link">About</a>
          <a className="link">Store</a>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <a className="link">Gmail</a>
          <a className="link">Images</a>

          {/* Icon */}
          <div className="rounded-full hover:bg-gray-100 cursor-pointer">
            <BsGridFill className="h-10 w-10 p-2 hover:scale-110 transition duration-150" />
          </div>
          {/* Avatar */}
          <Avatar />
        </div>
      </header>
      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          alt="Google Logo"
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-200 border px-5  items-center sm:max-w-xl lg:max-w-2xl gap-x-3">
          <AiOutlineSearch className=" text-gray-500 cursor-pointer" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none py-3  flex-grow"
          />
          <HiMicrophone className="cursor-pointer" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm feeling Lucky!
          </button>
        </div>
      </form>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

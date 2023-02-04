import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { RxCross1 } from "react-icons/rx";
import { HiMicrophone } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const submitButton = useRef(null);
  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term || term === router.query.term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center gap-x-6">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex gap-x-3 flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ">
          <input
            type="text"
            // value={searchInputRef}
            defaultValue={router.query.term}
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
          />
          <RxCross1
            className="cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => {
              searchInputRef.current.value = "";
            }}
          />
          <HiMicrophone className="hidden sm:inline-flex text-blue-500 border-l-2 pl-4 h-9 w-9" />
          <AiOutlineSearch
            onClick={() => submitButton.current.click()}
            className="h-6 w-6 text-blue-500 hidden sm:inline-flex cursor-pointer"
          />
          <button
            hidden
            type="submit"
            ref={submitButton}
            onClick={search}
          ></button>
        </form>
        <Avatar className="ml-auto" />
      </div>

      {/* Header Options */}
      <HeaderOptions />
    </header>
  );
};

export default Header;

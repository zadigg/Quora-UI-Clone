import {
  HomeIcon,
  PencilAltIcon,
  ClipboardListIcon,
  UserGroupIcon,
  BellIcon,
  UserCircleIcon,
  GlobeIcon,
  SearchIcon,
  ViewListIcon,
  HeartIcon,
  ShareIcon,
  ChatIcon,
  FastForwardIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

import Quora from "../Quora.svg";
import Mid from "./Mid";
import React, { useState } from "react";
import MobileMid from "./MobileMid";

function Header() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className=" bg-gray-300 ">
      <div className="w-full bg-white  ">
        <div className="flex justify-between mx-3 sm:mx-4 md:mx-5 lg:mx-auto  lg:justify-start -mt-3 space-x-8 items-center xl:w-[1000px]   h-20  shadow-lg">
          {/* left */}

          <div
            className={`${
              active ? "ml-5 sm:ml-4 md:ml-3 " : ""
            }flex items-center space-x-2`}
          >
            <ViewListIcon
              onClick={handleClick}
              className="h-8 text-blue-500 lg:hidden "
            />
            <img src={Quora} className="h-7 " alt="" />
          </div>
          {/* middle */}
          <div className="hidden lg:flex flex-grow sm:space-x-3 md:space-x-5 lg:space-x-10">
            <Mid Icon={HomeIcon} />
            <Mid Icon={PencilAltIcon} />
            <Mid Icon={ClipboardListIcon} />
            <Mid Icon={UserGroupIcon} />
            <Mid Icon={BellIcon} />
            <Mid Icon={HomeIcon} />

            <div className="flex flex-grow items-center border border-gray-400 ">
              <SearchIcon className="h-5 mx-2 text-gray-500 " />
              <input
                className="bg-transparent outline-none p-1 text-sm"
                type="text"
                placeholder="Search Quora"
              />
            </div>
          </div>
          {/* right */}
          <div className="flex justify-end items-center space-x-4">
            <UserCircleIcon className="h-8 text-blue-500 " />
            <GlobeIcon className="h-8 text-[#909092] " />
            <button className="bg-red-600 text-white py-2 rounded-full p-3 whitespace-nowrap">
              Add Question
            </button>
          </div>
        </div>
      </div>
      {/* Middle Mobile View */}
      <div className="h-6"></div>
      <div className="flex xl:w-[1000px] mx-auto ">
        <div className="w-6"></div>
        <div
          className={`${
            !active ? "hidden" : "flex flex-col"
          } lg:hidden space-y-10 bg-white px-8 h-screen   `}
        >
          <MobileMid Icon={HomeIcon} />
          <MobileMid Icon={PencilAltIcon} />
          <MobileMid Icon={ClipboardListIcon} />
          <MobileMid Icon={UserGroupIcon} />
          <MobileMid Icon={BellIcon} />
          <MobileMid Icon={HomeIcon} />
        </div>
        <div className="flex flex-grow w-full   ">
          <div className="  w-1/6 hidden lg:flex lg:flex-col px-3 space-y-3  ">
            <h1 className="hover:bg-gray-200 rounded-md cursor-pointer p-2">
              Information Tech
            </h1>
            <h1 className="hover:bg-gray-200  rounded-md cursor-pointer p-2">
              Mental health
            </h1>
            <h1 className="hover:bg-gray-200  rounded-md cursor-pointer p-2">
              Smart phone
            </h1>
            <h1 className="hover:bg-gray-200  rounded-md cursor-pointer p-2">
              Books
            </h1>
          </div>
          <div className="w-6/6 md:w-4/6 ">
            <div className="bg-white  rounded-lg p-5 space-y-3">
              <h1 className="font-bold">Get more with Quora+</h1>
              <div className="flex">
                <p>
                  Browse ad‑free and access exclusive content from participating
                  creators and Spaces.
                </p>
                <img
                  src="//qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.subscriptions.quora_plus_indicator_lightmode.svg-26-4dd7a76edd7752b6.svg"
                  alt=""
                />
              </div>
              <button className="bg-blue-700 py-2 rounded-full px-5 text-white">
                Learn More
              </button>
            </div>
            {/*  */}
            <div className="m-5"></div>
            <div className="bg-white  rounded-lg p-5 space-y-1 text-gray-400 ">
              <div className="flex items-center">
                <UserCircleIcon className="h-5 text-blue-500" />
                <h1>Abel Kibebe</h1>
              </div>

              <p className="text-2xl text-gray-600 font-bold">
                What is your Question or Link?
              </p>
            </div>
            <div className="m-5"></div>
            {/*  */}
            <div className="bg-white  rounded-lg p-5 space-y-1 text-gray-400 hover:bg-gray-100">
              <div className="flex items-center">
                <UserCircleIcon className="h-8 text-blue-500" />
                <div className="text-xs">
                  <div className="flex space-x-2">
                    <p>Abel Kibebe</p>
                    <p className="text-blue-700 cursor-pointer">Follow</p>
                  </div>
                  <div className="flex items-center">
                    <p>Self-taught</p>
                    <p>Updated May 11, 2019</p>
                  </div>
                </div>
              </div>

              <div className="text-black  ">
                <p className="text-xl font-bold">
                  Who is the smartest person in the world?
                </p>
                <p className="text-gray-500 text-sm">
                  Originally Answered: Who is the smartest person in the world?
                </p>
                <p className="text-gray-700">
                  With an outstanding IQ of 230, Terence Tao, was teaching
                  5-year-olds how to spell and how to add numbers – he was 2.
                  When he was merely 10, he began participating in International
                  Mathematical Olympiads. Born in 1975, he won a bronze in 1986,
                  silver in 1987 and gold in 1988, becoming the youngest ever
                  gold medalist in the Mathematical Olympiad. By the time he was
                  16, he had earned his Bachelor’s and Master’s degrees - he got
                  his Ph.D. at 20.
                </p>
                <div className="flex justify-center">
                  <img
                    src="https://qph.fs.quoracdn.net/main-qimg-c1ffbb1bd84b01efd23197c66af09f68-lq"
                    alt=""
                  />
                </div>
                <div className="flex justify-between p-4 hover:bg-gray-100">
                  <div className="flex space-x-4">
                    <div className="flex space-x-1">
                      <HeartIcon className="h-5" />
                      <p>18.8k</p>
                    </div>

                    <div className="flex space-x-1">
                      <ShareIcon className="h-5" />
                      <p>168</p>
                    </div>

                    <div className="flex space-x-1">
                      <ChatIcon className="h-5" />
                      <p>653</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <FastForwardIcon className="h-5" />
                    <DotsHorizontalIcon className="h-5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="m-5"></div>
            {/*  */}
          </div>
          {/* side space */}
          <div className="w-6"></div>

          <div className="  hidden md:block md:w-2/6  ">
            <div className="bg-white rounded-lg p-2">
              <p className="bg-gray-200 p-1 ">Improve Your feed</p>
              <div className="p-1 space-x-3 flex items-center border-b-2">
                <input type="checkbox" id="horns" name="horns" />

                <p>Visit your feed</p>
              </div>
              {/*  */}
              <div>
                <div className="p-1 space-x-3 flex items-center border-b-2">
                  <input type="checkbox" id="horns" name="horns" />

                  <p>Follow 5 more Spaces</p>
                </div>
              </div>
              {/*  */}
              <div>
                <div className="p-1 space-x-3 flex items-center border-b-2">
                  <input type="checkbox" id="horns" name="horns" />

                  <p>Upvote 2 more good pieces of content</p>
                </div>
              </div>
              {/*  */}
              <div>
                <div className="p-1 space-x-3 flex items-center border-b-2">
                  <input type="checkbox" id="horns" name="horns" />

                  <p>Ask a question</p>
                </div>
              </div>
              {/*  */}
              <div>
                <div className="p-1 space-x-3 flex items-center border-b-2">
                  <input type="checkbox" id="horns" name="horns" />

                  <p>Add 3 credentials about where you live, work or study</p>
                </div>
              </div>
              {/*  */}
              <div>
                <div className="p-1 space-x-3 flex items-center border-b-2">
                  <input type="checkbox" id="horns" name="horns" />

                  <p>Answer a question</p>
                </div>
              </div>
              {/*  */}
            </div>
            <div className="h-5"></div>
            <div className="bg-white rounded-lg p-2">Spaces to follow</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import React from "react";
import { SlOptions } from "react-icons/sl";
import { title } from "process";
import { Inter } from "next/font/google";
import FeedCard from "./components/FeedCard";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSideBarButton {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "BookMarks",
    icon: <BsBookmark />,
  },
  {
    title: "TwitterBlue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More options",
    icon: <SlOptions />,
  },
];
export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className=" ml-28 col-span-3  border pt-1  ">
          <div className="text-4xl transition-all h-fit cursor-pointer hover:bg-gray-600 p-4 rounded-full fit">
            <BsTwitter />
          </div>
          <div className="mt-1 text-2xl font-semibold pr-4">
            <ul>
              {sideBarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-600 rounded-full px-5 py-2 cursor- mt-2"
                  key={item.title}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <button className="bg-[#1d9bf0] py-2  px-4 rounded-full w-full mt-5 mx-4">
              Tweet
            </button>
          </div>
        </div>
        <div className="col-span-5 border border-gray-600 border-r-[1px] border-r-[1px] border-l-2 border-gray-400">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 border-r-2"></div>
      </div>
    </div>
  );
}

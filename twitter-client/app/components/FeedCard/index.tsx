import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineDotChart, AiOutlineHeart } from "react-icons/ai";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-gray-600 border-r-0 border-l-0 p-4 hover:bg-slate-900 gap-3 transition-all cursor-pointer">
      <div className="grid grid-cols-12 ">
        <div className="col-span-4">
          <Image
            src="https://avatars.githubusercontent.com/u/97886479?s=400&u=ef9a4b93814b55ef8e7d547d4e670e5cd97db1bb&v=4"
            alt="img"
            height={"50"}
            width={"50"}
          />
        </div>
        <div className="col-span-11">
          <h5>Kavya Suryawanshi</h5>
          <p>
            Hi there, Trying to build something in Mern so that can impliment
            all concepts.........
          </p>
          <div className="flex justify-between mt-5 text-xl items-center  p-2 w-[90%] ">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;

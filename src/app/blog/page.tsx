"use client";

import Image from "next/image";
import React from "react";

import Appbar from "../components/Appbar";

import { useRouter } from "next/navigation";

const Blog: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <Appbar />

      <div className="flex flex-row border-2 mx-10 mt-10 rounded-2xl">
        <div className="p-5">
          {" "}
          <Image
            src="/colorado_school_of_mines_logo.jpeg"
            alt="Colorado_image"
            width={300}
            height={300}
            className=" flex-none bg-gray-50"
          ></Image>
        </div>
        <div className="p-5">
          <h1 className="text-white text-3xl font-semibold font=sans">
            {" "}
            Blog Title
          </h1>
          <h3 className="mt-2 text-xl  text-gray-100">Author</h3>
          <p className="my-5  text-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            egestas dui ut ornare interdum. In molestie mi quam, eu facilisis
            lorem eleifend a. Morbi quis ligula diam. Donec bibendum nulla sed
            lobortis laoreet.
          </p>
          <a
            className="text-white text-xl font-semibold font-sans hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-rose-300"
            onClick={() => router.push("/experience")}
          >
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;

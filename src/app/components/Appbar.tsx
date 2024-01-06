"use client";

import Image from "next/image";
import React from "react";

import { useRouter } from "next/navigation";

const TransparentNavbar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-between pt-10">
      <div className="mb-10">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/srikanth.svg"
          alt="Next.js Logo"
          width={500}
          height={300}
          priority
          onClick={() => router.push("/")}
        />
      </div>

      <nav className="bg-transparent p-4x w-full">
        <div className="flex items-center justify-between ">
          <div className="hover: cursor-pointer transition ease-in-out delay-150 mx-auto px-4 py-2 rounded hover:-translate-y-1 hover:scale-110 duration-150">
            <a
              className="text-white text-xl font-semibold font-sans hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-rose-300"
              onClick={() => router.push("/experience")}
            >
              Experience
            </a>
          </div>
          <div className="transition ease-in-out delay-150 mx-auto px-4 py-2 rounded hover:-translate-y-1 hover:scale-110 duration-150">
            <a
              className="text-white text-xl font-semibold font-sans hover:text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200"
              onClick={() => router.push("/experience")}
            >
              Research
            </a>
          </div>
          <div className="transition ease-in-out delay-150 mx-auto px-4 py-2 rounded hover:-translate-y-1 hover:scale-110 duration-150">
            <a
              className="text-white text-xl font-semibold font-sans hover:text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200"
              onClick={() => router.push("/experience")}
            >
              Projects
            </a>
          </div>
          <div className="transition ease-in-out delay-150 mx-auto px-4 py-2 rounded hover:-translate-y-1 hover:scale-110 duration-150">
            <a
              className="text-white text-xl font-semibold font-sans hover:text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200"
              onClick={() => router.push("/experience")}
            >
              Publications
            </a>
          </div>
          <div className="transition ease-in-out delay-150 mx-auto px-4 py-2 rounded hover:-translate-y-1 hover:scale-110 duration-150">
            <a
              className="text-white text-xl font-semibold font-sans hover:text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200"
              onClick={() => router.push("/experience")}
            >
              People
            </a>
          </div>
          <div className="transition ease-in-out delay-150 mx-auto px-4 py-2 rounded hover:-translate-y-1 hover:scale-110 duration-150">
            <a
              className="text-white text-xl font-semibold font-sans hover:text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200"
              onClick={() => router.push("/experience")}
            >
              Collaborations
            </a>
          </div>
          <div className="transition ease-in-out delay-150 mx-auto px-4 py-2 rounded hover:-translate-y-1 hover:scale-110 duration-150">
            <a
              className="text-white text-xl font-semibold font-sans hover:text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200"
              onClick={() => router.push("/experience")}
            >
              Lab Tours
            </a>
          </div>
          <div className="transition ease-in-out delay-150 mx-auto px-4 py-2 rounded hover:-translate-y-1 hover:scale-110 duration-150">
            <a
              className="text-white text-xl font-semibold font-sans hover:text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200"
              onClick={() => router.push("/experience")}
            >
              Hobbies
            </a>
          </div>
          <div className="transition ease-in-out delay-150 mx-auto px-4 py-2 rounded hover:-translate-y-1 hover:scale-110 duration-150">
            <a
              className="text-white text-xl font-semibold font-sans hover:text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200"
              onClick={() => router.push("/blog")}
            >
              Blog
            </a>
          </div>
          <div className="transition ease-in-out delay-150 mx-auto px-4 py-2 rounded hover:-translate-y-1 hover:scale-110 duration-150">
            <a
              className="text-white text-xl font-semibold hover:text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200"
              onClick={() => router.push("/contact")}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TransparentNavbar;

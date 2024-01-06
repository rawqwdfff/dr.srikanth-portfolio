import Image from "next/image";
import Appbar from "../components/Appbar";

export default function experience() {
  return (
    <div>
      <Appbar />

      <div className="flex flex-row border-2 mx-10 mt-10 rounded-2xl">
        <div className="p-5">
          {" "}
          <Image
            src="/colorado_school_of_mines_logo.jpeg"
            alt="Colorado_image"
            width={80}
            height={80}
            className=" flex-none rounded-full bg-gray-50"
          ></Image>
        </div>
        <div className="p-5">
          <h1 className="text-white text-2xl font-semibold font=sans">
            {" "}
            Senior Postdoctoral Fellow/ Scientist
          </h1>
          <h3 className="mt-1 truncate text-xs leading-5 text-gray-100	">
            Colorado School of Mines
          </h3>
          <h3 className="mt-1 truncate text-xs leading-5 text-gray-100	">
            Chemical and Biological Engineering Department, Colorado School of
            Mines, Golden, CO 80401, United States of America.
          </h3>
          <p className="mt-1 truncate text-xs leading-5 text-gray-100	">
            Description
          </p>
        </div>
      </div>
    </div>
  );
}

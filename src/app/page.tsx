"use client";

import Image from "next/image";
import AppBar from "./components/Appbar";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <AppBar />

      <div className="flex flex-row mt-10 mx-10 ">
        <div className="p-10 ">
          <Image
            src="/srikanth.jpeg"
            width={1200}
            height={1200}
            className=" rounded-3xl"
            alt="Dr.Srikanth Image"
          ></Image>
        </div>
        <div>
          <div className="px-5 pt-10 ">
            <h1 className="text-white text-3xl font-bold tracking-tight mb-10">
              Hey, I&apos;m Dr. Srikanth Ponnada M.S., PhD., CChem., MRSC. 👋
            </h1>

            <p className="text-white text-xl font-medium ">
              Im a Materials Science & Electrochemistry researcher having 10+
              years of experience (Including PhD Exp). My primary focus is on
              Developing Advanced Sustainable Functional Composites for
              application in Batteries, Supercapacitors, Fuel cells, Membrane
              Applications, Water Analysis and Electrocatalysis (specifically
              CO2RR, OER, HER, NRR, Methanol Oxidation etc.)
            </p>
          </div>
          <div className=" mt-10 mx-10 flex flex-row">
            <div className="mx-auto">
              <Image
                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/linkedin.svg"
                alt="Orcid"
                width={30}
                height={30}
                priority
                onClick={() => router.push("")}
              />
            </div>
            <div className="mx-auto">
              <Image
                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/orcid.svg"
                alt="Orcid"
                width={30}
                height={30}
                priority
                onClick={() => router.push("")}
              />
            </div>
            <div className="mx-auto">
              <Image
                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/google-scholar.svg"
                alt="Orcid"
                width={30}
                height={30}
                priority
                onClick={() => router.push("")}
              />
            </div>
            <div className="mx-auto">
              <Image
                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/envelope-solid.svg"
                alt="Orcid"
                width={30}
                height={30}
                priority
                onClick={() => router.push("")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

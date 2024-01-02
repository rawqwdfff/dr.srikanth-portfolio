import Typography from "@mui/material/Typography";
import Image from "next/image";
import AppBar from "../components/Appbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-10">
      <div className="mb-10">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/srikanth.svg"
          alt="Next.js Logo"
          width={500}
          height={300}
          priority
        />
      </div>

      <AppBar />

      <div className="mt-10" style={{ display: "flex" }}>
        <div>
          <Image
            className="rounded-full"
            src="/srikanth.jpeg"
            width={1000}
            height={600}
            alt="Dr.Srikanth Image"
          />
        </div>
        <div className="flex flex-col items-center justify-between p-10">
          <Typography variant="h6" gutterBottom style={{ fontSize: "30px" }}>
            Hey, I&apos;m Dr Srikanth Ponnada M.S., PhD., CChem., MRSC. 👋
          </Typography>
          <Typography variant="body1" gutterBottom style={{ fontSize: "20px" }}>
            Im a Materials Science & Electrochemistry researcher having 10+
            years of experience (Including PhD Exp). My primary focus is on
            Developing Advanced Sustainable Functional Composites for
            application in Batteries, Supercapacitors, Fuel cells, Membrane
            Applications, Water Analysis and Electrocatalysis (specifically
            CO2RR, OER, HER, NRR, Methanol Oxidation etc.)
          </Typography>
        </div>
      </div>
    </div>
  );
}

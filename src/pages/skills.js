import { FaReact } from "react-icons/fa";
import { DiJavascript1, DiNodejs } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BsFiletypeCss } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import Image from "next/image";
import Ellipse2 from "../images/Ellipse2.png";

export default function Skills() {
  return (
    <>
      <div className="flex text-black p-8 justify-center font-bold text-2xl lg:text-4xl">
        <h1>MY SKILLS</h1>
      </div>
      <div className="flex flex-row gap-20 justify-center p-8">
        <FaReact className="flex text-4xl" />
        <DiJavascript1 className="flex text-4xl" />
        <AiOutlineHtml5 className="flex text-4xl" />
      </div>
      <div className="flex flex-row gap-20 justify-center p-8">
        <BsFiletypeCss className="flex text-4xl" />
        <DiNodejs className="flex text-5xl" />
        <SiTailwindcss className="flex text-4xl" />
      </div>
      <div className="flex fixed bottom-0 left-0 mix-blend-overlay">
        <Image src={Ellipse2} width="120" height="auto" />
      </div>
    </>
  );
}

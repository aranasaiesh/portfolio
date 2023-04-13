import { FaReact } from "react-icons/fa";
import { DiJavascript1, DiNodejs } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BsFiletypeCss } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";

export default function Skills() {
  return (
    <>
      <div className="flex bg-white text-black justify-center md:p-8 pt-24 font-bold text-2xl">
        <h1>MY SKILLS</h1>
      </div>
      <div className="flex flex-row gap-20 justify-center pt-20 p-8">
        <FaReact className="flex text-3xl" />
        <DiJavascript1 className="flex text-3xl" />
        <AiOutlineHtml5 className="flex text-3xl" />
      </div>
      <div className="flex flex-row gap-20 justify-center pt-14 p-8">
        <BsFiletypeCss className="flex text-3xl" />
        <DiNodejs className="flex text-4xl" />
        <SiTailwindcss className="flex text-3xl" />
      </div>
    </>
  );
}

import Image from "next/image";
import mytodoapp from "../images/mytodoapp.png";

export default function About() {
  return (
    <>
      <div className="flex bg-white text-black justify-center font-bold text-2xl pt-8">
        <h1>MY PROJECTS</h1>
      </div>
      <div className="flex justify-center pt-8">
        <a href="https://todo-list-4bhurk2ym-aranasaiesh.vercel.app/">
          <Image src={mytodoapp} width="420" height="120" />
        </a>
      </div>
    </>
  );
}

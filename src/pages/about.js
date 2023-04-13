import Image from "next/image";
import mytodoapp from "../images/mytodoapp.png";

export default function About() {
  return (
    <>
      <div className="flex bg-white text-black justify-center p-8 font-bold text-2xl">
        <h1>MY PROJECTS</h1>
      </div>
      <div className="flex md:p-48 md:ml-36">
        <a href="https://todo-list-4bhurk2ym-aranasaiesh.vercel.app/">
          <Image src={mytodoapp} />
        </a>
      </div>
    </>
  );
}

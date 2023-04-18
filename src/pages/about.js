import Image from "next/image";
import mytodoapp from "../images/mytodoapp.png";

export default function About() {
  return (
    <>
      <div className="flex bg-white text-black justify-center font-bold text-2xl pt-8 ml-8">
        <h1>MY PROJECTS</h1>
      </div>
      <p className="flex justify-center font-thin pt-4 ml-8">
        These are my projects that i have been doing at school. I am currently
        working on other projects as well that i will showcase soon.{" "}
      </p>
      <div className="flex justify-center pt-8 ml-8">
        <a href="https://todo-list-4bhurk2ym-aranasaiesh.vercel.app/">
          <Image src={mytodoapp} width="420" height="120" />
        </a>
      </div>
      <p className="flex justify-center italic md:justify-center">
        Click on the image and try it!
      </p>
    </>
  );
}

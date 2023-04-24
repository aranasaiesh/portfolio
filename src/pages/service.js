import Image from "next/image";
import mytodoapp from "../images/mytodoapp.png";
import weatherapp from "../images/weatherapp.png";

export default function About() {
  return (
    <div>
      <div className="flex bg-white text-black justify-center font-bold text-2xl p-8">
        <h1>MY PROJECTS</h1>
      </div>
      <p className="flex justify-center font-thin p-8">
        These are my projects that i have been doing at school. I am currently
        working on other projects as well that i will showcase soon.{" "}
      </p>
      <div className="flex flex-col sm:flex-row p-8 sm:justify-center sm:flex">
        <div className="flex justify-center p-8">
          <a href="https://todo-list-4bhurk2ym-aranasaiesh.vercel.app/">
            <Image src={mytodoapp} width="320" height="120" />
          </a>
        </div>
        <div className="flex justify-center p-8">
          <a href="https://weather-app-eta-lovat-42.vercel.app/">
            <Image src={weatherapp} width="320" height="120" />
          </a>
        </div>
      </div>
      <p className="flex italic justify-center">
        Click one of the images to try it out!
      </p>
    </div>
  );
}

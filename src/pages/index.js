import Image from "next/image";
import Ellipse1 from "../images/Ellipse1.png";
import Ellipse2 from "../images/Ellipse2.png";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-2 justify-start pt-32 pl-16 sm:pl-32 lg:flex lg:pt-48 lg:ml-96">
        <div className="hidden sm:flex sm:absolute sm:mix-blend-overlay sm:ml-96 lg:flex">
          <Image src={Ellipse1} alt="Ellipse image" width="320" height="auto" />
        </div>
        <div>
          <h1 className="font-bold text-2xl">Hi, I am Aran.</h1>
        </div>
        <div>
          <h1 className="text-pink-400 font-bold text-2xl ">
            Frontend Developer
          </h1>
        </div>
      </div>

      <div className="flex fixed bottom-0 left-0 mix-blend-overlay">
        <Image src={Ellipse2} alt="Ellipse image2" width="120" />
      </div>
    </main>
  );
}

import Image from "next/image";
import Ellipse1 from "../images/Ellipse1.png";
import Ellipse2 from "../images/Ellipse2.png";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-2 justify-start pt-36 pl-16 md:pl-32">
        <div className="flex fixed md:ml-72">
          <Image src={Ellipse1} alt="Ellipse image" width="480" height="auto" />
        </div>
        <div>
          <h1 className="font-bold text-2xl ">Hi, I am Aran.</h1>
        </div>
        <div>
          <h1 className="text-pink-400 font-bold text-2xl ">
            Frontend Developer
          </h1>
        </div>
        <p className="text-sm">
          Happy to see you here. Have a look around and enjoy my content.
        </p>
      </div>
      <div className="flex absolute bottom-0 left-0 mix-blend-overlay">
        <Image src={Ellipse2} alt="Ellipse image2" width="120" />
      </div>
    </main>
  );
}

import Link from "next/link";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <div className="flex flex-row w-full">
        <div className="flex p-8 justify-start absolute">
          <Link href="/" className="font-extrabold text-xl">
            LOGO
          </Link>
        </div>
        <div className="w-full flex md:justify-center pt-14 ">
          <ul className="flex gap-8 p-8">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/skills" className="hover:underline">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/service" className="hover:underline">
                Service
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 left-0 w-full h-24 bg-black z-50 text-xl">
      <div className="px-16 mx-auto max-w-[1600px] w-full flex items-center h-full">
        <div className="h-full">
          <Image
            src="/logo.svg"
            alt="Mechatronics Logo"
            width={96}
            height={96}
          ></Image>
        </div>
        <div className="ml-auto flex gap-8">
          <Link className="" href="/">
            Home
          </Link>
          <Link className="" href="/resources">
            Resources
          </Link>
          {/* <Link className="" href="/gallery">
            Gallery
          </Link> */}
        </div>
      </div>
    </nav>
  );
}

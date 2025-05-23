"use client";
import Image from "next/image";
import { Button } from "../ui/button";
const Navbar = () => {
  return (
    <nav className="flex flex-wrap  mx-auto container justify-between relative items-center p-4  text-white">
      <a href="/" className="flex items-center space-x-2">
        <Image
          src="/ecoSync.png"
          alt="Logo"
          width={120}
          height={120}
        />
      </a>
      <ul className="flex space-x-10 text-lg">
        <li><a href={"#features"} className="hover:text-black">Features</a></li>
        <li><a href={"#deliverable"} className="hover:text-black">Deliverable</a></li>
        <li><a href={"#team"} className="hover:text-black">Team</a></li>
      </ul>
      <a href="/auth/login">
        <Button className="bg-[#1ea52a] font-semibold text-2xl">
          Login
        </Button>
      </a>
    </nav>
  );
};

export default Navbar;

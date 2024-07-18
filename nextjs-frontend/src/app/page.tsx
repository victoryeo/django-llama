

import Image from "next/image";
import { Navbar } from "../libs/ui/component/navbar";

export default function Home() {

  return (
    <>
      <div className="max-w-screen-xl items-center ">
        <Navbar />
        <h1 className="text-3xl font-bold underline body">
          Virtual classroom
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          
        </div>
      </div>
    </>
  );
}



import Image from "next/image";
import { Navbar } from "../libs/ui/component/navbar";

export default function Home() {

  return (
    <>
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <Navbar />
        <h1 className="text-3xl font-bold underline">
          Virtual classroom
        </h1>
      </div>
    </>
  );
}

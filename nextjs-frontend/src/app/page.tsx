

import Image from "next/image";
import { Navbar } from "../libs/ui/component/navbar";
import { Categories } from "../libs/ui/component/categories";
import { Features } from "../libs/ui/component/features";
import { Pagefooter } from "../libs/ui/component/pagefooter";

export default function Home() {

  return (
    <>
      <div className="">
        <Navbar />
        <div className="lowerBody">
          <h1 className="text-3xl font-bold  body px-4 py-4">
            Top categories
          </h1>
          <div className="">
            <Categories />  
          </div>
        </div>
        <h1 className="text-3xl font-bold body bg-white">
          &nbsp;
        </h1>
        <Features />
        <Pagefooter />
      </div>
    </>
  );
}

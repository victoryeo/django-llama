import { Signout } from "../../libs/ui/component/signout";
import { Navbar } from "../../libs/ui/component/navbar";

export default function Page() {

  return (
    <>
       <div className="">
        <Navbar />
        <Signout/>
        </div>
    </>
  );
}
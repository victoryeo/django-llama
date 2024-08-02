import { Logout } from "../../libs/ui/component/logout";
import { Navbar } from "../../libs/ui/component/navbar";

export default function Page() {

  return (
    <>
       <div className="">
        <Navbar />
        <Logout/>
        </div>
    </>
  );
}
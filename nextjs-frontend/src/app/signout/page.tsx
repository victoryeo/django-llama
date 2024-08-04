import { Signout } from "../../libs/ui/component/signout";
import { Navbar } from "../../libs/ui/component/navbar";
import UserSession from "../user-session";

export default function Page() {

  return (
    <>
       <div className="">
        <UserSession />
        <Signout/>
        </div>
    </>
  );
}
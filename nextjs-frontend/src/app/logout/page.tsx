import { Logout } from "../../libs/ui/component/logout";
import { Navbar } from "../../libs/ui/component/navbar";
import UserSession from "../user-session";

export default function Page() {

  return (
    <>
       <div className="">
        <UserSession />
        <Logout/>
        </div>
    </>
  );
}
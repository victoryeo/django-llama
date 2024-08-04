import { Login } from "../../libs/ui/component/login";
import { Navbar } from "../../libs/ui/component/navbar";
import UserSession from "../user-session";

export default function Page() {

  return (
    <>
       <div className="">
        <UserSession />
        <Login/>
        </div>
    </>
  );
}

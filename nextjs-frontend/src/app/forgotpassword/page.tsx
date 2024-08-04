import { Navbar } from "../../libs/ui/component/navbar";
import { ForgotPassword } from "@/libs/ui/component/forgotpassword";
import UserSession from "../user-session";

export default function Page() {

  return (
    <>
       <div className="">
        <UserSession />
        <ForgotPassword />
        </div>
    </>
  );
}

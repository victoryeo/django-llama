import { Navbar } from "../../libs/ui/component/navbar";
import { Signin } from "@/libs/ui/component/signin";
import UserSession from "../user-session";

export default async function Page() {
  return (
    <div className="">
        <UserSession />
        <Signin />
    </div>
 )
}
import { Navbar } from "../libs/ui/component/navbar";
import { auth, signOut } from "@/libs/auth"

export default async function UserSession() {
    const session = await auth()// calling session
    console.log("auth", session);
    return (
        <>
            <Navbar session={session}/>
        </>
    )
}
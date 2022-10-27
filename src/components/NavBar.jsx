import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { SignIn } from "./SignIn";
import { LogOut } from "./LogOut";

export const NavBar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="bg-gray-800 h-20 flex justify-between items-center p-4 text-white rounded-t-lg">
      <h1 className="text-3xl font-bold">Chat App</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

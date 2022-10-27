import { auth } from "../firebase";

export const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  };

  return (
    <button
      className="bg-gray-200 px-4 py-2 text-gray-800 rounded hover:bg-gray-50"
      onClick={() => auth.signOut()}
    >
      Sair
    </button>
  );
};

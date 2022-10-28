import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../firebase";
export const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  async function handleNewMessage(e) {
    e.preventDefault();
    if (input === "") {
      alert("Por favor, envie uma mensagem valida");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.currrent.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <form
      onSubmit={(e) => handleNewMessage(e)}
      className="h-14 w-full max-w-[728px] flex text-xl absolute bottom-0 "
    >
      <input
        type="text"
        placeholder="Escreva algo...."
        className="w-full text-xl p-3 bg-gray-900 text-white outline-none border-none"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button type="submit" className="w-[20%] bg-green-500">
        Enviar
      </button>
    </form>
  );
};

import { useRef } from "react";
import { useEffect } from "react";
import { Message } from "./Message";
import { SendMessage } from "./SendMessage";

const style = {
  send: `bg-[#495dff] text-white flex-row-reverse text-end float right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

export const Chat = () => {
  const scroll = useRef();
  useEffect(() => {}, []);
  return (
    <>
      <main className="flex flex-col p-[10px] relative">
        <Message />
      </main>
      <SendMessage />
      <span ref={scroll}></span>
    </>
  );
};

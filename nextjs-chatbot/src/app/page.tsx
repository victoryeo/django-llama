'use client'
import { useCallback, useState } from "react";
import { MessageRole } from "../types/MessageRoles";
import { Conversations } from "../types";
import { ChatUI } from "../components/chat-ui/ChatUI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailReply } from "@fortawesome/free-solid-svg-icons";
import styles from "./page.module.css";

const TEST_USER_INFO = { firstName: "First", lastName: "User" };

export default function Home() {
  const [isQuerying, setIsQuerying] = useState<boolean>(false);

  const [chatConversations, setChatConversations] = useState<Conversations>([
    {
      id: "1",
      role: MessageRole.USER,
      message: "Who are you?",
      userInfo: TEST_USER_INFO,
    },
    {
      id: "2",
      role: MessageRole.ASSISTANT,
      message: "I am a LLM ChatBOT..",
    },
  ]);

  const sendBtn  = async (data: string) => {
    try {
      console.log("data", data)
      const res = await fetch("http://127.0.0.1:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        console.error("Response error");
        return "Response error"
      }
      console.log(res)
      return res.json();
    } catch (error) {
      console.error("Failed to get response from server");
      return "Failed to get response from server"
    }
  }

  const handleSubmit = useCallback((value: string) => {
    setIsQuerying(true);
    setChatConversations((conversations) => [
      ...conversations,
      {
        //userInfo: TEST_USER_INFO,
        id: (conversations.length + 1).toString(),
        role: MessageRole.USER,
        message: value,
      },
    ]);
    
    sendBtn(value).then((response) => {
      console.log(response)
      setIsQuerying(false);
      setChatConversations((conversations) => [
        ...conversations,
        {
          id: (conversations.length + 1).toString(),
          role: MessageRole.ASSISTANT,
          message: response?.answer,
        },
      ]);
    })

    /*setTimeout(() => {
      setIsQuerying(false);
      setChatConversations((conversations) => [
        ...conversations,
        {
          id: (conversations.length + 1).toString(),
          role: MessageRole.ASSISTANT,
          message: "This is a mocked sample LLM ChatBot response",
        },
      ]);
    }, 3000); */
  }, []);

  return (
    <ChatUI
      isQuerying={isQuerying}
      onSubmit={handleSubmit}
      placeholder="Type here to interact with LLM ChatBot"
      disabled={isQuerying}
      conversations={chatConversations}
      customSubmitIcon={<FontAwesomeIcon icon={faMailReply} />}
    />
  )
}

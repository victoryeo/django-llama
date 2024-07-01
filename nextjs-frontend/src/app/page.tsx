import Image from "next/image";
import styles from "./page.module.css";
import { Chat } from "@/components/chat";

export default function Home() {
  const id = "1"

  return (
    <main className={styles.main}>
      <Chat id={id} />
    </main>
  );
}

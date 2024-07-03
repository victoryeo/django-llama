import styles from "./page.module.css";
import { Chat } from "../components/chat";
import { nanoid } from "../lib/utils";

export default function Home() {
  const id = nanoid()

  return (
    <main className={styles.main}>
      <Chat id={id} />
    </main>
  );
}

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        <Link href="/user">User Page</Link>
      </p>
    </main>
  );
}

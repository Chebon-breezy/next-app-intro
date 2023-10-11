import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello!, welcome to next</h1>
      <h2>Welcome to Next webpage</h2>

      <Link href="/users">Users</Link>
    </main>
  );
}

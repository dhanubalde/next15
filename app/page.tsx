
"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (page: string) => router.push(`/${page}`)
  


  return (
    <div>
      <h1>Routing | Navigation</h1>

      <Link href='/login'>Login</Link> <br />
      <Link href='/about'>About</Link>
      <div className="flex flex-col items-start">
        <button className="hover:underline" onClick={() => router.push('/colors')}>
        Go to Colors
        </button>
        <button className="hover:underline" onClick={()=> navigate("login")}>
        Go to Login Page
        </button>
      </div>
      
    </div>
  );
}

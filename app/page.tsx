
"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import User from "@/components/user";
export default function Home() {
  const router = useRouter();
  const navigate = (page: string) => router.push(`/${page}`)
  


  return (  
    <div>

      <section>
        <User
          username="dhanubalde"
          email="dhanubalde@gmail.com"
          location="Quezon city"
          isAdmin={false}
        ></User>
      </section>
    </div>
  );
}

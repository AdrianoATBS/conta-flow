"use client";
import PainelPage from "@/features/painel/painelPage/PainelPage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
    const rota = useRouter();
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        rota.replace("/login");
      }
    }, [rota]);
    return (
    
   <main className="w-full h-screen">
        <PainelPage />
   </main>
    
  );
}

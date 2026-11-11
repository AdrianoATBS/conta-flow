import PainelPage from "@/features/painel/painelPage/PainelPage";
import { redirect } from "next/navigation";
export default function Home() {
  return (
    redirect("/login"),
   <main className="w-full h-screen">
        <PainelPage />
   </main>
    
  );
}

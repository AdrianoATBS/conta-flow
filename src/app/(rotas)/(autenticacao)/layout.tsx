import "@/app/globals.css";

export default function AutenticacaoLayout({ children }:
     {children: React.ReactNode }) {
  return (
    <main className="w-full min-h-screen bg-white 
    ">

        <div className=" w-full space-y-8 ">
            {children}
        </div>
    </main>
  );
}

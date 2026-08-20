
export default function AutenticacaoLayout({ children }:
     {children: React.ReactNode }) {
  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-gray-50
    ">

        <div className="max-w-md w-full space-y-8 p-6">
            {children}
        </div>
    </main>
  );
}

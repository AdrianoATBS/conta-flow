import Link from "next/link";
export default function FooterAutenticacao(){
    const anoAtual = new Date().getFullYear();
    return(
        <footer className="w-full border-t border-fundo py-6 px-4">
            
            <p className="text-center text-sm text-gray-500">
                &copy; {anoAtual}. Todos os direitos reservados.
            </p>
            <nav>
                <ul className="flex flex-wrap justify-center gap-4 mt-2">
                    <li>
                        <Link href="#" className="text-sm text-[#5E5E5E]/50 hover:text-[#5E5E5E]">Termos de uso</Link>
                    </li>
                    <li>
                        <Link href="#" className="text-sm text-[#5E5E5E]/50 hover:text-[#5E5E5E]">Privacidade</Link>
                    </li>
                    <li>
                        <Link href="#" className="text-sm text-[#5E5E5E]/50 hover:text-[#5E5E5E]">Suporte</Link>
                    </li>
                </ul>   
                
            </nav>
           
        </footer>
    )
}
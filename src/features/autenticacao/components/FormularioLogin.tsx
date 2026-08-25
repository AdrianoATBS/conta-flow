import BotaoGenerico from "@/shared/components/ui/BotaoGenerico";
import InputGenerico from "@/shared/components/ui/InputGenerico";
import Link from "next/link";
export default function FormularioLogin(){
    return(
        <form className="w-full max-w-md 
         border-borda border p-6 sm:p-8 rounded-2xl flex flex-col gap-4
        justify-center " >

            <InputGenerico placeholder="nome@empresa.com" label="Email" type="email" tamanho="sm" cores="secundaria"
            className="rounded-lg border-borda outline-none" />

            <div className="flex flex-col">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-1">
               
                    <label className="text-sm text-[#5E5E5E]">Senha</label> 
                    <Link href="#" className="text-sm text-[#5E5E5E]/50 hover:text-[#5E5E5E]">Esqueceu sua senha?</Link>
                </div>
                
                <InputGenerico placeholder="••••••••"  type="password" tamanho="sm" cores="secundaria"
                className="rounded-lg border-borda outline-none " />
            </div>
            
            <div className="flex flex-col ">
                <BotaoGenerico texto="Entrar ->"  className=" hover:bg-black" />
                <div className="flex items-center justify-center gap-2 my-4">
                    <div className="border-[#E5E2E1] border w-full"></div>
                    <p className="text-sm text-[#5E5E5E] ">OU</p>
                    <div className="border-[#E5E2E1] border w-full"></div>
                </div>
                    <BotaoGenerico texto="Criar Conta" 
                    className="bg-[#FCF9F8] border-[#C1C6D7] border
                     text-black hover:bg-[#C1C6D7] hover:text-white" />
            </div>
            
            <nav >
                <ul className="flex flex-wrap justify-between items-center gap-4">
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
        </form>
    )
}
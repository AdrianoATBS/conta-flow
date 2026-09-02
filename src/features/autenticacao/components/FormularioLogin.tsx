"use client"
import { BotaoGenerico, InputGenerico } from "@/shared/components/ui";
import { useState } from "react";
import Link from "next/link";
import { SubmitEvent } from "react";
import { loginService } from "../services/login.services";
import { useRouter } from "next/navigation";
export default function FormularioLogin(){

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const router = useRouter();

    const handleSubmit = async  (e: SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(!email || !senha){
            alert("Por favor, preencha todos os campos.");
            return; 
        }
        if(senha.length < 6){
            alert("A senha deve ter no mínimo 6 caracteres.");
            return;
        }
        try{
            await loginService({ email, senha });
            router.push("/");
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
        setEmail("");
        setSenha("");
    }
 
    return(
        <section className="w-full max-w-md flex flex-col items-center gap-4 mx-auto">
            <form onSubmit={handleSubmit} className="w-full  border-borda border p-6 sm:p-8 rounded-2xl 
            flex flex-col gap-4 justify-center " >

                <InputGenerico placeholder="nome@empresa.com" label="Email" type="email" tamanho="sm" cores="secundaria"
                className="rounded-lg border-borda outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

                <div className="flex flex-col">
                    <div className="flex flex-wrap justify-between items-center gap-4 mb-1">
                
                        <label className="text-sm text-[#5E5E5E]">Senha</label> 
                        <Link href="#" className="text-sm text-[#5E5E5E]/50 hover:text-[#5E5E5E]">Esqueceu sua senha?</Link>
                    </div>
                    
                    <InputGenerico placeholder="••••••••"  type="password" tamanho="sm" cores="secundaria"
                    className="rounded-lg border-borda outline-none " 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} />
                </div>
                
                <div className="flex flex-col ">
                    <BotaoGenerico texto="Entrar ->"  className=" hover:bg-black" />
                    <div className="flex items-center justify-center gap-2 my-4">
                        <div className="border-[#E5E2E1] border w-full"></div>
                        <p className="text-sm text-[#5E5E5E] ">OU</p>
                        <div className="border-[#E5E2E1] border w-full"></div>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <Link href="/cadastro" className="w-full">
                            <BotaoGenerico texto="Criar Conta" 
                            className="w-full bg-[#FCF9F8] border-[#C1C6D7] border
                            text-black hover:bg-[#C1C6D7] hover:text-white" />
                        </Link>
                    </div>
                </div>
                
            </form>
                <nav className="w-full mt-2">
                    <ul className="flex flex-wrap justify-between items-center gap-4 md:gap-8 ">
                        <li>
                            <Link href="#" className="text-sm text-[#5E5E5E]/50 hover:text-[#5E5E5E] 
                            hover:underline sm:text-sm">Termos de uso</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-sm text-[#5E5E5E]/50 hover:text-[#5E5E5E] 
                            hover:underline sm:text-sm">Privacidade</Link>

                        </li>
                        <li>
                            <Link href="#" className="text-sm text-[#5E5E5E]/50
                             hover:text-[#5E5E5E] hover:underline sm:text-sm">Suporte</Link>
                        </li>
                    </ul>
                </nav>
        </section>
    )
}
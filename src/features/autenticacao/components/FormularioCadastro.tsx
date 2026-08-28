"use client";
import BotaoGenerico from "@/shared/components/ui/BotaoGenerico";
import InputGenerico from "@/shared/components/ui/InputGenerico";
import Link from "next/link";
import { useState } from "react";
import { SubmitEvent } from "react";
import { registroService } from "../services/registro.services";
export default function FormularioCadastro() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!nome || !email || !senha){
            alert("Por favor, preencha todos os campos.");
            return; 
        }
        
        try {
            const response = await registroService({ nome, email, senha });
            console.log(response);
        }catch(error){
            console.error("Erro ao registrar:", error);
        }

        setNome("");
        setEmail("");
        setSenha("");
    }
    
    return(
        <section className="w-full max-w-md flex flex-col items-center gap-4 p-4 ">

            <form onSubmit={handleSubmit} className="w-full border-borda border p-6 
            sm:p-8 rounded-2xl flex flex-col gap-4 justify-center " >
                <div className="flex flex-col gap-1.5 ">
                    <label className="text-xs text-[#5E5E5E] md:text-sm">Nome</label>
                    <InputGenerico placeholder="Seu nome completo" type="text" 
                     tamanho="sm" cores="secundaria"
                    className="rounded-lg border-borda outline-none"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}/>
                </div>

                <div className="flex flex-col gap-1.5 ">
                    <label className="text-xs text-[#5E5E5E] md:text-sm">Email</label>
                    <InputGenerico placeholder="exemplo@dominio.com" type="email" tamanho="sm" cores="secundaria"
                    className="rounded-lg border-borda outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                    </InputGenerico>
                </div>

                <div className="flex flex-col gap-1.5 ">
                    <label className="text-xs text-[#5E5E5E] md:text-sm">Senha</label>
                    <InputGenerico placeholder="••••••••" type="password"  tamanho="sm" cores="secundaria"
                    className="rounded-lg border-borda outline-none"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}/>
                </div>

                {/* <div className="flex flex-col gap-1.5 " >
                    <label className="text-xs text-[#5E5E5E] md:text-sm">Confirmar Senha</label>
                    <InputGenerico placeholder="••••••••" type="password"  tamanho="sm" cores="secundaria"
                    className="rounded-lg border-borda outline-none"
                    value={senha}
                    onChange={(e) => setConfirmarSenha(e.target.value)} />
                </div> */}

                <div className="flex flex-col gap-1.5 ">
                <BotaoGenerico texto="Criar Conta"  className="hover:bg-black"/>
                <div className="border-[#E5E2E1] border w-full"></div>
                    <div className="flex items-ceenter justify-center gap-2 my-4">
                        <p className="text-texto text-xs sm:text-sm ">Já tem uma conta?</p>
                        <Link href="/login" className="text-[#0070F3] text-xs hover:underline sm:text-sm"> Fazer login</Link>
                    </div>
                </div>
            </form>

            <div className="text-center">
                <p className="text-texto/60 text-xs sm:text-sm">Ao criar sua conta, você concorda com nossos {" "}
                    <Link href="#" className="text-texto/40 underline">Termos de uso</Link> e {" "}
                    <Link href="#" className="text-texto/40 underline">Política de Privacidade</Link>.
                </p>
            </div>
         </section>
    )
}
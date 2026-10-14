"use client"
import { BotaoGenerico, InputGenerico } from "@/shared/components/ui";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
interface InformacoesPerfil {
    id: string;
    nome: string;
    novoEmail: string;
    salvarNoBanco: (dados: {id: string, nome: string, novoEmail:string}, 
        campoAlterado: "nome" | "novoEmail") => Promise<void>;
}
export default function EditarPerfil({ id, nome, novoEmail, salvarNoBanco }: InformacoesPerfil){
    
    const [nomeAtualizado, setNomeAtualizado] = useState<string>(nome);
    const [emailAtualizado, setEmailAtualizado] = useState<string>(novoEmail);


    
    const informacoes = [
        {id: "nome", dica: "Alexandre Silva", label: "Nome", valor: nomeAtualizado},
        {id: "email", dica: "alexandre.silva@example.com", label: "Email", valor: emailAtualizado},
        
    ]
    const  handleSalvarAlteracoes = async () => {
        if(salvarNoBanco){
            if(nomeAtualizado !== nome ){
                await salvarNoBanco({id, nome: nomeAtualizado, novoEmail: emailAtualizado}, "nome");
                console.log("Nome atualizado:", nomeAtualizado);        
            }
            if(emailAtualizado !== novoEmail){
                await salvarNoBanco({id, nome: nomeAtualizado, novoEmail: emailAtualizado}, "novoEmail");
                console.log("Email atualizado:", emailAtualizado);
            }
        }

    }
    

    return(
        <section className="w-full mb-5 ">
            <header className="flex p-2 gap-2"> 
                <FaUserCircle className="text-[#5E5E5E] text-6xl" />
                <div className="flex flex-col ">
                    <h2 className="text-2xl font-semibold text-texto">Editar Perfil</h2>
                    <p className="text-sm text-[#5E5E5E]">Atualize sua foto e detalhes públicos.</p>
                </div>
            </header>
            <form className="w-full flex flex-col gap-4">
                {informacoes.map((info) => (
                    <div key={info.label} className="flex flex-col gap-1">
                        <label className="text-sm text-[#5E5E5E]" htmlFor={info.id}>{info.label}</label>
                        <InputGenerico id={info.id} placeholder={info.dica} value={info.valor}
                        onChange={info.id === "nome" ? (e) => setNomeAtualizado(e.target.value) : 
                            (e) => setEmailAtualizado(e.target.value)}
                        tamanho="sm" cores="secundaria"
                        className="rounded-sm outline-none" />
                    </div>
                ))}
                
                <div className="w-full flex flex-col ">
                    <label htmlFor="bio" className="text-sm text-[#5E5E5E]">Bio:</label>
                    <textarea id="bio" placeholder="Desenvolvedor Front-end apaixonado por tecnologia."    
                    className="h-24 border botao-secundario px-2 py-1.5 text-gray-400 text-sm 
                    resize-none rounded-md
                    focus:outline-none "/>
                </div>
            </form>
            <div className="w-full flex justify-end mt-3">
                <BotaoGenerico texto="Salvar Alterações" className="hover:bg-botao-primario/80 
                active:scale-95" onClick={() => handleSalvarAlteracoes()} />
            </div>
        </section>
    )
}
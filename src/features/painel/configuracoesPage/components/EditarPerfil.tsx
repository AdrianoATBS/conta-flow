import { BotaoGenerico, InputGenerico } from "@/shared/components/ui";
import { FaUserCircle } from "react-icons/fa";

export default function EditarPerfil(){
    const informacoes = [
        {id: "nome", dica: "Alexandre Silva", label: "Nome" },
        {id: "username", dica: "@alexsilva", label: "Nome de usuário" },
        {id: "email", dica: "alexandre.silva@example.com", label: "Email"},
        
    ]
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
                        <InputGenerico id={info.id} placeholder={info.dica}
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
                active:scale-95" />
            </div>
        </section>
    )
}
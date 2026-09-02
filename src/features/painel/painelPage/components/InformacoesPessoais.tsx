import { FaUserCircle } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

import Link from "next/link";
export default function InformacoesPessoais(){
    const InformacoesPessoais = [
        {nome: "Nome Completo", valor: "Ricardo Almeida", },
        {nome: "ENDEREÇO DE EMAIL", valor: "ricardo.almeida@example.com"},
        {nome: "DATA DE CRIAÇÃO", valor: "15 de Janeiro, 2024", icon: <FaRegCalendar />},
        {nome: "ÚLTIMO LOGIN", valor: "Hoje às 9:42 (SAO PAULO)", icon: <MdHistory />},
    ]
    return(
        <section className="w-full border border-[#E5E2E1] rounded-lg mt-5 mb-10 ">
            <div className="w-full flex items-center gap-2 border-b border-[#E5E2E1] px-4 pt-4 pb-4 ">
                <FaUserCircle size={24} className="text-primaria shrink-0" />
                <h2 className="text-2xl font-semibold leading-tight">Informações Pessoais</h2>
                <p className="ml-auto text-primaria text-xs bg-primaria/10 rounded-lg px-2 py-1
                whitespace-nowrap flex items-center gap-1">
                <span>•</span> Ativo </p>
            </div>
            
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-4 border-b border-[#E5E2E1]">
               {InformacoesPessoais.map((info, index) => (
                    <div key={index} className="flex flex-col gap-1">
                        <span className="text-xs text-texto-atenunado">{info.nome}</span>
                        <div className="flex items-center gap-2">
                            {info.icon && <span className="text-lg text-[#6B7280] shrink-0">{info.icon}</span>}
                            <p className="text-sm ">{info.valor}</p>
                        </div>
                    </div>
               ))}
            </div>
            <div className="w-full mt-4  flex flex-col px-4 pb-5 ">
                <div className="w-fit flex items-center justify-center">
                    <Link href="#" className="flex items-center gap-2 border
                     border-[#E5E2E1] rounded-lg p-4 active:scale-95 hover:bg-white/30">
                        <MdOutlineSettings className="text-primaria text-lg" />
                        <span className="text-primaria"> Configurações</span>
                    </Link>
                </div>
                <div className="w-fit mt-4 ">
                    <Link href="#" className="flex items-center gap-2 p-4 bg-primaria rounded-lg
                     active:bg-primaria/50 active:scale-95">
                        <FaPencilAlt className="text-white text-lg" />
                        <span className="text-white"> Editar Perfil</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
import { FaRegUser } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { BsShield } from "react-icons/bs";
import { HiOutlineBanknotes } from "react-icons/hi2";
import Link from "next/link";

export default function SecaoConfiguracoes() {
    const opcoesConfiguracoes = [
        {link: "/", nome: "Usuario", icone: <FaRegUser />},
        {link: "/configuracoes/notificacoes", nome: "Notificações", icone: <FaRegBell />},
        {link: "/configuracoes/seguranca", nome: "Segurança", icone: <BsShield />},
        {link: "/configuracoes/faturamento", nome: "Faturamento", icone: <HiOutlineBanknotes />},
    ]
    return(
        <nav className="w-full mb-5">
            <h2 className=" text-texto ml-2">Configurações</h2>
            <ul>
                {opcoesConfiguracoes.map((opcao) => (
                    <li key={opcao.nome} className="flex items-center gap-2
                     p-2 rounded-md  text-texto hover:bg-primaria/50
                      hover:text-white transition-colors duration-200"
                      >
                        <Link href={opcao.link} className="flex items-center gap-2 cursor-pointer"> 
                            <span className="text-lg">{opcao.icone}</span>
                            <span className="text-sm">{opcao.nome}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
import {Header, Logo, Icons, BotaoLogout} from "@/shared/components/layout/HeaderBase";
import { useRemoveToken } from "../../hooks/hooksPainel/useRemoveToken";
import Link from "next/link";
export default function HeaderPainel() {
    const ativo = "painel";
    const  removeToken  = useRemoveToken();
    return(
        <header>
            <Header 
                esquerda={<Logo EhHome={false} />}
                centro={
                    <div className=" hidden md:flex md:items-center md:gap-4">
                        <Link href={"/"} className={`${ativo === "painel" ? "text-[#0058C3] border-b-3 " : "text-md semi-bold text-[#1A1A1A]"}`}>Meu Perfil</Link>
                        <Link href={"/configuracoes"} className="text-md semi-bold text-[#1A1A1A]">Configurações</Link>
                        </div>
                    }
                direita={
                <div className="flex items-center gap-1">
                    <BotaoLogout removeToken={removeToken.removeToken}/> 
                    <Icons />
                </div>
                }
            />
        </header>
    )
}
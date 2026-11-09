import {Header, Logo, Icons, BotaoLogout} from "@/shared/components/layout/HeaderBase";

export default function HeaderPainel() {
    const ativo = "painel";
    return(
        <header>
            <Header 
                esquerda={<Logo EhHome={false} />}
                centro={
                    <div className=" hidden md:flex md:items-center md:gap-4">
                        <p className={`${ativo === "painel" ? "text-[#0058C3] border-b-3 " : "text-md semi-bold text-[#1A1A1A]"}`}>Meu Perfil</p>
                        <p className="text-md semi-bold text-[#1A1A1A]">Configurações</p>
                    </div>
                }
                direita={
                <div className="flex items-center gap-1">
                    <BotaoLogout/> 
                    <Icons />
                </div>
                }
            />
        </header>
    )
}
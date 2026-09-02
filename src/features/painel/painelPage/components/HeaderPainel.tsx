import {Header, Logo, Icons, BotaoLogout} from "@/shared/components/layout/HeaderBase";

export default function HeaderPainel() {
    return(
        <header>
            <Header 
                esquerda={<Logo EhHome={false} />}
                centro={null}
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
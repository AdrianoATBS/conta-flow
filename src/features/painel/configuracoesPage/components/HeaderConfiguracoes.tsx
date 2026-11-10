import { Header, Logo, Icons} from "@/shared/components/layout/HeaderBase";
import { useRemoveToken } from "../../hooks/hooksPainel/useRemoveToken";
export default function HeaderConfiguracoes() {
    const ativo = "configuracoes";
    const removerToken  = useRemoveToken();
    return(
        <Header
            esquerda={<Logo EhHome={false} /> }
            centro={
                <div className=" hidden md:flex md:items-center md:gap-4">
                    <p className="text-md semi-bold text-[#1A1A1A]">Meu Perfil</p>
                    <p className={`${ativo === "configuracoes" ? "text-[#0058C3] border-b-3 " : "text-md semi-bold text-[#1A1A1A]"}`}>Configurações</p>
                </div>

            }
            direita={
                <div className="flex items-center gap-2">
                    <button className=" hidden md:block text-sm semi-bold text-[#1A1A1A] "
                     onClick={removerToken.removeToken}>Sair</button>
                    <Icons />
                </div>

            }

        />
       
    )
}
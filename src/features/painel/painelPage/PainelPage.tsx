"use client";
import FooterGenerico from "../../../shared/components/layout/FooterGenerico";
import TituloGenerico from "../components/TituloGenerico";
import { HeaderPainel, InformacoesPessoais, 
    SecaoSegura, SecaoStatus, ZonaPerigo } from "./components";
import { UsePerfilUsuario } from "../hooks/hooksPainel/usePerfilUsuario";
import { useRemoveToken } from "../hooks/hooksPainel/useRemoveToken";
export default function PainelPage(){
    
    const informacoesUsuario = UsePerfilUsuario();
    const removerToken = useRemoveToken();

    return(
        <div className="w-full min-h-screen flex flex-col ">
            <HeaderPainel />
            <main className="w-full max-w-6xl mx-auto px-4 pt-6">
            <TituloGenerico 
                titulo="Minha Conta"
                texto="Gerencie as informações do seu perfil e
                preferências de acesso." />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2 flex flex-col gap-2">

                        <InformacoesPessoais nome={informacoesUsuario.nome} email={informacoesUsuario.email} criadoEm={informacoesUsuario.criadoEm} />
                        <SecaoStatus />
                    </div>

                    <div className="flex flex-col lg:mt-5">
                        <SecaoSegura />
                        <ZonaPerigo removeToken={removerToken.removeToken} />
                    </div>
                </div>
            </main>
            
            <FooterGenerico 
                paragrafo="ContaFlow. Todos os direitos reservados."
                links={["Termos de uso", "Política de privacidade", "Suporte"]} />
        </div>
    )
}
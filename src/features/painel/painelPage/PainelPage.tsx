"use client";
import FooterGenerico from "../../../shared/components/layout/FooterGenerico";
import TituloGenerico from "../components/TituloGenerico";
import { HeaderPainel, InformacoesPessoais, 
    SecaoSegura, SecaoStatus, ZonaPerigo } from "./components";
import { UsePerfilUsuario } from "../hooks/hooksPainel/usePerfilUsuario";
export default function PainelPage(){
    
    const informacoesUsuario = UsePerfilUsuario();

    return(
        <div className="w-full min-h-screen flex flex-col ">
            <HeaderPainel />
            <div className="w-full max-w-2xl mx-auto pt-6 px-4
            flex flex-col gap-2 h-full">
            <TituloGenerico 
                titulo="Minha Conta"
                texto="Gerencie as informações do seu perfil e
                preferências de acesso." />
            <InformacoesPessoais nome={informacoesUsuario.nome} email={informacoesUsuario.email} criadoEm={informacoesUsuario.criadoEm} />
            <SecaoStatus />
            <SecaoSegura />
            <ZonaPerigo />
            </div>
            <FooterGenerico 
                paragrafo="ContaFlow. Todos os direitos reservados."
                links={["Termos de uso", "Política de privacidade", "Suporte"]} />
        </div>
    )
}
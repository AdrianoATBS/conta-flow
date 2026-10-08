"use client";
import FooterGenerico from "../../../shared/components/layout/FooterGenerico";
import TituloGenerico from "../components/TituloGenerico";
import { useEffect, useState } from "react";
import { painelService } from "../services/painel/painel.services";
import { HeaderPainel, InformacoesPessoais, 
    SecaoSegura, SecaoStatus, ZonaPerigo } from "./components";
export default function PainelPage(){
    
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [criadoEm, setCriadoEm] = useState<string>("");

    useEffect(() => {
        const  fetchPainel = async () => {
            try{
                const response = await painelService();
                setNome(response.nome);
                setEmail(response.email);
                setCriadoEm(response.criadoEm);
            } catch (error) {
                console.error("Erro ao buscar dados do painel:", error);
            }
        }
        fetchPainel();
    }, [])

    return(
        <div className="w-full min-h-screen flex flex-col ">
            <HeaderPainel />
            <div className="w-full max-w-2xl mx-auto pt-6 px-4
            flex flex-col gap-2 h-full">
            <TituloGenerico 
                titulo="Minha Conta"
                texto="Gerencie as informações do seu perfil e
                preferências de acesso." />
            <InformacoesPessoais nome={nome} email={email} criadoEm={criadoEm} />
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
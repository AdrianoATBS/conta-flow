"use client";
import { EditarPerfil, HeaderConfiguracoes, SecaoConfiguracoes, StatusConta, ZonaPerigo } from "./components";
import FooterGenerico from "../../../shared/components/layout/FooterGenerico";
import TituloGenerico from "../components/TituloGenerico";
import { useState, useEffect } from "react";
import { editarNomeService } from "../services/configuracao/editarNome.services";
import { painelService } from "../services/painel/painel.services";
import { editarEmailService } from "../services/configuracao/editarEmail.services";
export default function ConfiguracaoPage() {
    const [nome, setNome] = useState<string>("");
    const [novoEmail, setNovoEmail] = useState<string>("");
    const [id, setId] = useState<string>("");

    useEffect(() => {
        const fetchConfiguracoes = async () => {
            try{
                const response = await painelService();
                setId(response.id);
                setNovoEmail(response.email);
                setNome(response.nome);

            }catch (error) {
                console.error("Erro ao buscar dados do painel:", error);
            }
        }
        fetchConfiguracoes();
    }, []);  



   const salvarNoBanco = async (dadosAtualizados: {id: string, nome: string, novoEmail:string },
    campoAlterado: "nome" | "novoEmail"
   ) => {
        try{
            console.log("Dados a serem salvos no banco:", dadosAtualizados);
            if(campoAlterado === "nome" ){
                const responseNome = await editarNomeService({id:dadosAtualizados.id, nome: dadosAtualizados.nome});
                console.log("Dados do nome atualizados salvos no banco:", responseNome);
            }else if(campoAlterado === "novoEmail"){
                const responseEmail = await editarEmailService({id:dadosAtualizados.id, novoEmail: dadosAtualizados.novoEmail});
                console.log("Dados do email atualizados salvos no banco:", responseEmail);   
            }
        }
        catch (error) {
            console.error("Erro ao salvar dados no banco:", error);
        }
   }

    return (
        <div >
            <HeaderConfiguracoes />
            <div className="w-full max-w-2xl mx-auto pt-6 px-4
            flex flex-col gap-2 h-full">
                <SecaoConfiguracoes />
                <TituloGenerico titulo="Configurações do Perfil" 
                texto="Gerencie suas informações pessoais e preferências de conta."/>
                {id ? (
                    <EditarPerfil id={id} nome={nome} novoEmail={novoEmail} salvarNoBanco={salvarNoBanco} />
                ) : (
                    <p>Carregando informações do perfil...</p>
                )}
                <StatusConta />
                <ZonaPerigo />
            </div>
            <FooterGenerico
            paragrafo="ContaFlow. Todos os direitos reservados."
            links={["Termos de uso", "Política de privacidade", "Suporte"]}
            
            />
        </div>
    )
}
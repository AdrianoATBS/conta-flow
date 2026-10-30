"use client";
import { EditarPerfil, HeaderConfiguracoes, SecaoConfiguracoes, StatusConta, ZonaPerigo } from "./components";
import FooterGenerico from "../../../shared/components/layout/FooterGenerico";
import TituloGenerico from "../components/TituloGenerico";
import { useEditarPerfil } from "../hooks/hooksConfiguracoes/useEditarPerfil";
import { usePainelDados } from "../hooks/hooksConfiguracoes/usePainelDados"
import { useAcoesConta } from "../hooks/hooksConfiguracoes/useAcoesConta";
export default function ConfiguracaoPage() {

    const dadosIniciais = usePainelDados();

    const editarPerfil = useEditarPerfil();
    const acoesConta = useAcoesConta();
    return (
        <div >
            <HeaderConfiguracoes />
            <div className="w-full max-w-2xl mx-auto pt-6 px-4
            flex flex-col gap-2 h-full">
                <SecaoConfiguracoes />
                <TituloGenerico titulo="Configurações do Perfil" 
                texto="Gerencie suas informações pessoais e preferências de conta."/>
                {dadosIniciais.id ? (
                    <EditarPerfil 
                    id={dadosIniciais.id} nome={dadosIniciais.nome} novoEmail={dadosIniciais.novoEmail} salvarNoBanco={editarPerfil.salvarNoBanco} />
                ) : (
                            <p>Carregando informações do perfil...</p>
                        )}
                <StatusConta/>
                <ZonaPerigo  desativarConta={acoesConta.handleDesativarConta} reativarConta={acoesConta.handleReativarConta}  />
            </div>
            <FooterGenerico
            paragrafo="ContaFlow. Todos os direitos reservados."
            links={["Termos de uso", "Política de privacidade", "Suporte"]}
            
            />
        </div>
    )
}
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
        <div  className="min-h-screen flex flex-col">
            <HeaderConfiguracoes />
            <div className="w-full max-w-6xl mx-auto px-4 pt-6
        flex-1 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
               
                    <aside>
                        <SecaoConfiguracoes />
                    </aside>
                    <div className="flex flex-col gap-4">

                    <TituloGenerico titulo="Configurações do Perfil" 
                    texto="Gerencie suas informações pessoais e preferências de conta."/>
                    <div className="flex flex-col gap-4 md:flex-row ">

                        {dadosIniciais.id ? (
                            <EditarPerfil 
                            id={dadosIniciais.id} nome={dadosIniciais.nome} novoEmail={dadosIniciais.novoEmail} salvarNoBanco={editarPerfil.salvarNoBanco} />
                        ) : (
                            <p>Carregando informações do perfil...</p>
                        )}
                        <div className="md:w-1/3 ">

                            <StatusConta status={dadosIniciais.ativo} />
                        </div>
                    </div>
                        <ZonaPerigo  desativarConta={acoesConta.handleDesativarConta} reativarConta={acoesConta.handleReativarConta}  />
                   
                    </div>
            </div>
            <FooterGenerico
            paragrafo="ContaFlow. Todos os direitos reservados."
            links={["Termos de uso", "Política de privacidade", "Suporte"]}
            
            />
        </div>
    )
}
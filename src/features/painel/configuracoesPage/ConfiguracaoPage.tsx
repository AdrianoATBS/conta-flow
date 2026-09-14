import { EditarPerfil, HeaderConfiguracoes, SecaoConfiguracoes, StatusConta, ZonaPerigo } from "./components";
import FooterGenerico from "../components/FooterGenerico";
import TituloGenerico from "../components/TituloGenerico";
export default function ConfiguracaoPage() {
    return (
        <div >
            <HeaderConfiguracoes />
            <div className="w-full max-w-2xl mx-auto pt-6 px-4
            flex flex-col gap-2 h-full">
                <SecaoConfiguracoes />
                <TituloGenerico titulo="Configurações do Perfil" 
                texto="Gerencie suas informações pessoais e preferências de conta."/>
                <EditarPerfil />
                <StatusConta />
                <ZonaPerigo />
            </div>

        </div>
    )
}
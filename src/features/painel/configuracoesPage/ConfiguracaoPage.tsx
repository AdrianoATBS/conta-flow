import TituloGenerico from "../components/TituloGenerico";
import HeaderConfiguracoes from "./components/HeaderConfiguracoes";
import SecaoConfiguracoes from "./components/NavConfiguracoes";
export default function ConfiguracaoPage() {
    return (
        <div >
            <HeaderConfiguracoes />
            <div className="w-full max-w-2xl mx-auto pt-6 px-4
            flex flex-col gap-2 h-full">
                <SecaoConfiguracoes />
                <TituloGenerico titulo="Configurações do Perfil" 
                texto="Gerencie suas informações pessoais e preferências de conta."/>
            </div>
        </div>
    )
}
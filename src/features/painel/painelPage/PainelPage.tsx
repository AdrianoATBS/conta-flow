import TituloGenerico from "../components/TituloGenerico";
import HeaderPainel from "./components/HeaderPainel";

export default function PainelPage(){
    return(
        <div className="w-full min-h-screen">
            <HeaderPainel />
            <div className="w-full max-w-2xl mx-auto pt-6 px-4
            flex flex-col gap-2">
            <TituloGenerico 
                title="Minha Conta"
                texto="Gerencie as informações do seu perfil e
                preferências de acesso." />
            </div>
        </div>
    )
}
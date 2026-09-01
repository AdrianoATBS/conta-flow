import FooterGenerico from "../components/FooterGenerico";
import TituloGenerico from "../components/TituloGenerico";
import HeaderPainel from "./components/HeaderPainel";

export default function PainelPage(){
    return(
        <div className="w-full min-h-screen flex flex-col ">
            <HeaderPainel />
            <div className="w-full max-w-2xl mx-auto pt-6 px-4
            flex flex-col gap-2 h-full">
            <TituloGenerico 
                title="Minha Conta"
                texto="Gerencie as informações do seu perfil e
                preferências de acesso." />

            </div>
            <FooterGenerico 
                paragrafo="ContaFlow. Todos os direitos reservados."
                links={["Termos de uso", "Política de privacidade", "Suporte"]} />
        </div>
    )
}
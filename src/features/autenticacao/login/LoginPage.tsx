import { FooterAutenticacao, FormularioLogin, HeaderAutenticacao } from "../components";

export default function LoginPage(){
    return(
        <div className=" w-full min-h-screen flex flex-col justify-between items-center gap-4" >
            <div className="w-full flex flex-col items-center gap-4 p-4 py-12">

                <HeaderAutenticacao Titulo="Acesse sua conta" Subtitulo="Bem-vindo de volta ao SaaS Manager."
                EstiloSubtitulo="text-sm md:text-base"
                />
                <FormularioLogin />
            </div>
            <FooterAutenticacao/>
        </div>
    )
}
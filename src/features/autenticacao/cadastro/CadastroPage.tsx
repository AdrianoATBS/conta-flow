import { FooterAutenticacao, FormularioCadastro, HeaderAutenticacao } from "../components";

export default function CadastroPage() {
    return(
        <div className="w-full min-h-screen flex flex-col justify-between items-center gap-4" >
            <div className="w-full flex flex-col items-center gap-4 p-4 py-12">
                <HeaderAutenticacao Titulo="Crie sua conta" 
                Subtitulo="Preencha os dados abaixo para começar."
                EstiloSubtitulo="text-sm md:text-base"
                />
                <FormularioCadastro/>
            </div>
            <FooterAutenticacao/>
        </div>
    )
}
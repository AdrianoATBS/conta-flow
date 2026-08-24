import FooterAutenticacao from "../components/FooterAutenticacao";
import FormularioLogin from "../components/FormularioLogin";
import HeaderAutenticacao from "../components/HeaderAutenticacao";

export default function LoginPage(){
    return(
        <div className=" w-full min-h-screen flex flex-col justify-between items-center gap-4" >
            <div className="w-full flex flex-col items-center gap-4 p-4 py-12">

                <HeaderAutenticacao Titulo="Acesse sua conta" Subtitulo="Bem-vindo de volta ao SaaS Manager." />
                <FormularioLogin />
            </div>
            <FooterAutenticacao/>
        </div>
    )
}
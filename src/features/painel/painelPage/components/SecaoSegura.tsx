import { BotaoGenerico } from "@/shared/components/ui";
import { RiShieldCheckFill } from "react-icons/ri";

export default function SecaoSegura(){
    return(
        <section className="w-full flex flex-col gap-2 border border-[#E5E2E1]
             px-4 py-4 rounded-lg mb-10 ">
                <h2 className="text-xl text-texto">Segurança</h2>
                <div className="w-full flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 ">
                        <RiShieldCheckFill className="text-lg text-[#0058C3] " />
                        <h3 className="text-md font-medium text-[#000000]">Autenticação MFA</h3>
                    </div>
                    <p className="text-xs font-bold text-[#93000A] bg-[#FFDAD6] px-3 py-2
                    rounded-lg ">DESATIVADO</p>
                </div>
                <p className="text-sm text-texto">Adicione uma camada extra de proteção à sua
                    conta configurando o acesso em duas etapas.
                </p>
                <BotaoGenerico texto="Configurar MFA" className="bg-transparent text-xs text-primario border p-1
                border-primario active:scale-95"/>
        </section>
    )
}
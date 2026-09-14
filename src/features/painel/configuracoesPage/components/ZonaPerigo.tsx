import { BotaoGenerico } from "@/shared/components/ui";
import { GoAlertFill } from "react-icons/go";

export default function ZonaPerigo(){
    return(
        <section className="w-full p-4 border border-[#BA1A1A]/30 bg-[#FFDAD6]/20 rounded-lg mb-5">
                <div className="flex items-center gap-2 mb-2">
                    <GoAlertFill className="text-[#BA1A1A] text-2xl" />
                    <h2 className="text-2xl font-semibold text-[#BA1A1A]">Zona de Perigo</h2>
                </div>
                <p className="text-sm">Estas ações são irreversíveis ou afetam
                    diretamente o acesso aos seus dados. Por
                    favor, proceda com cautela.
                </p>

                <div className="flex flex-col gap-2 mt-4 mb-3 p-4
                 bg-superficie border-2 border-primaria rounded-lg ">
                    <h3 className="font-bold">Desativar Conta</h3>
                    <p className="text-sm">Sua conta ficará oculta até que você faça login novamente.</p>
                    <BotaoGenerico texto="Desativar Conta" className="w-full mt-2 text-[#BA1A1A] bg-white 
                    border border-[#BA1A1A] p-1 rounded-xl hover:bg-[#BA1A1A]/10 active:scale-95 "/>
                </div>
                <div className="flex flex-col gap-2 mt-4 mb-3 p-4
                 bg-superficie border-2 border-primaria rounded-lg ">
                    <h3 className="font-bold">Reativar conta</h3>
                    <p className="text-sm">Se você desativou sua conta, pode reativá-la a qualquer momento fazendo login novamente.</p>
                    <BotaoGenerico texto="Reativar Conta" 
                    className="w-full mt-2 text-[#0058C3] bg-white border border-[#0058C3]
                     rounded-xl p-1 hover:bg-[#0058C3]/10 active:scale-95"/>
                </div>
                <div className="flex flex-col gap-2 mt-4 mb-3 p-4
                 bg-[#BA1A1A]/5 border border-[#BA1A1A] rounded-lg ">
                    <h3 className="font-bold text-[#BA1A1A]">Excluir Conta</h3>
                    <p className="text-sm">Esta ação é permanente e não pode ser desfeita. Todos os seus dados serão perdidos.</p>
                    <BotaoGenerico texto="Excluir Conta" className="w-full mt-2  
                    text-white bg-[#BA1A1A] rounded-xl p-1 active:scale-95"/>
                </div>
        </section>
    )
}
import { BotaoGenerico } from "@/shared/components/ui";
import { FiAlertTriangle } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react";
interface ModalExclusaoProps {
    fecharModal: () => void;
}

export default function ModalExclusao( { fecharModal }: ModalExclusaoProps) {
   const handleFecharModal = () => {
        fecharModal();
    }

    return(
        <section className="w-full max-w-md p-3 bg-[#FFDAD6]/20 
        rounded-lg mb-5 flex flex-col gap-4 items-center">
            <div className="w-full flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-[#BA1A1A]/20 rounded-full ">
                    <FiAlertTriangle className="text-[#BA1A1A] text-xl "/>
                </div>
                <h2 className="font-semibold text-2xl">Excluir Conta</h2>

                <span className="ml-auto cursor-pointer" onClick={handleFecharModal}>
                    <FiX className="text-[#5E5E5E] text-xl hover:text-[#BA1A1A]"/>
                </span>
            </div>
            <p className="text-texto-atenunado">Esta ação é permanente e não pode ser desfeita. Tem certeza?</p>
            <p className="text-sm text-texto-atenunado ">Ao prosseguir, todos os seus dados,
                configurações e integrações serão
                removidos permanentemente de nossos
                servidores.</p>
                            
            <BotaoGenerico texto="Excluir Permanentemente" className="bg-[#BA1A1A] text-white p-2 
            rounded-lg hover:bg-[#BA1A1A]/80 active:scale-95 w-full "/>
           
            <BotaoGenerico texto="Cancelar" className="bg-[#FFDAD6]/20 border border-[#C1C6D7]
            text-[#5E5E5E] p-2 rounded-lg hover:bg-[#E5E5E5]/80 active:scale-95 w-full" onClick={fecharModal}/>
           
        </section>
    )
}
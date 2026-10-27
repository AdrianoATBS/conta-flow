import { BotaoGenerico } from "@/shared/components/ui";
import { FiAlertTriangle } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useContagemRegressiva } from "@/features/painel/hooks/useContagemRegressiva";
interface ModalExclusaoProps {
    fecharModal: () => void;
    removeUsuario: () => Promise<void>;
}

export default function ModalExclusao( { fecharModal, removeUsuario }: ModalExclusaoProps) {
    
    const rota = useRouter();
    const tempo = useContagemRegressiva();


    const desativado = tempo > 0;
    
    const tratarExclusao = async () => {
        if(!desativado && removeUsuario){
            try{
                await removeUsuario();
                fecharModal();
                rota.push("/login");
            }
            catch (error) {
                console.error("Erro ao remover conta:", error);
            }
        }
    }
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-800/45 
        backdrop-blur-[2px] p-2" onClick={fecharModal}>
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg" 
        onClick={(e) => e.stopPropagation()}>
            <section className="p-3 rounded-lg mb-5 flex flex-col items-center gap-4 ">
                <div className="w-full flex items-center gap-2 ">
                    <div className="p-1.5 bg-[#BA1A1A]/20 rounded-full ">
                        <FiAlertTriangle className="text-[#BA1A1A] text-xl "/>
                    </div>
                    <h2 className="font-semibold text-2xl">Excluir Conta</h2>


                    <span className="ml-auto cursor-pointer" onClick={fecharModal}>
                        <FiX className="text-[#5E5E5E] text-xl hover:text-[#BA1A1A]"/>
                    </span>
                </div>
                <p className="text-texto-atenunado">Esta ação é permanente e não pode ser desfeita. Tem certeza?</p>
                <p className="text-sm text-texto-atenunado ">Ao prosseguir, todos os seus dados,
                    configurações e integrações serão
                    removidos permanentemente de nossos
                    servidores.</p>
                                
                <p className="text-sm text-texto-atenunado">Tempo restante: {tempo} segundos</p>
                
                <BotaoGenerico texto="Excluir Permanentemente" className={`${desativado ? 
                'opacity-50 cursor-not-allowed pointer-events-none ' : 'bg-[#BA1A1A] hover:bg-[#BA1A1A]/80 active:scale-95'} 
                 text-white p-2 rounded-lg  w-full`}
                 disabled={desativado}
                 onClick={tratarExclusao}/>
            
                <BotaoGenerico texto="Cancelar" className="bg-[#FFDAD6]/20 border border-[#C1C6D7]
                text-[#5E5E5E] p-2 rounded-lg hover:bg-[#E5E5E5]/80 active:scale-95 w-full" 
                onClick={fecharModal}/>
            
            </section>
        </div>
        </div>
    )
}
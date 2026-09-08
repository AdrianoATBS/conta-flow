import { BotaoGenerico } from "@/shared/components/ui";

export default function ZonaPerigo(){
    return(
        <section className="w-full flex flex-col gap-2 border
         border-[#BA1A1A]/20 bg-[#BA1A1A]/5 px-2 py-2 mb-5 rounded-lg">
            <h2 className="text-xl text-[#BA1A1A]">Zona de Risco</h2>
            <p className="text-[0.765rem] text-texto]">Sair da sua conta ou encerrar todas as sessõesativas em outros dispositivos.</p>
        
            <BotaoGenerico texto="Sair da Conta"  className="bg-[#BA1A1A] active:scale-95"/>
        </section>
    )
}
interface TituloGenericoProps {
    titulo: string;
    texto: string;
}
export default function TituloGenerico({ titulo, texto }: TituloGenericoProps){
    return(
        <div className="w-full flex flex-col gap-1">
            <h1 className="text-[32px] font-semibold">{titulo}</h1>
            <p className="text-sm text-[#5E5E5E]">{texto}</p>
        </div>
    )
}
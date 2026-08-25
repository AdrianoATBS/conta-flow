interface HeaderAutenticacaoProps  {
    Titulo: string,
    Subtitulo: string
    EstiloSubtitulo?: string
}

export default function HeaderAutenticacao({ Titulo, Subtitulo, EstiloSubtitulo  }: HeaderAutenticacaoProps){
    return(
        <header className="text-center">
               <h1 className="text-[#1C1B1B] text-2xl font-bold">{Titulo}</h1>       
               <p className={`text-[#5E5E5E] ${EstiloSubtitulo || "text-sm"}`}>{Subtitulo}</p>
        </header>
    )
}
interface HeaderAutenticacaoProps  {
    Titulo: string,
    Subtitulo: string
}

export default function HeaderAutenticacao({ Titulo, Subtitulo }: HeaderAutenticacaoProps){
    return(
        <header className="text-center">
               <h1 className="text-[#1C1B1B] text-2xl font-bold">{Titulo}</h1>       
               <p className="text-[#5E5E5E] text-sm">{Subtitulo}</p>
        </header>
    )
}
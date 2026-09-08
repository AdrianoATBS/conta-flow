export default function SecaoStatus() {
    const informacoesStatus  =[
        {nome: "ACESSOS ESTE MÊS", valor: "142"},
        {nome: "PROJETO ATIVOS", valor: "08"},
        {nome: "TEMPO DE USO", valor: "24h 15min"},
    ]

    return(
        <section className="w-full flex flex-col gap-4 mb-10">
                {informacoesStatus.map((info) => (
                    <div key={info.nome} className="w-full flex flex-col gap-2 
                    border border-[#E5E2E1] px-4 py-4 rounded-lg">
                        <span className="text-xs text-texto">{info.nome}</span>
                        <span className="font-semibold text-2xl">{info.valor}</span>
                    </div>
                ))}
        </section>
    )
}
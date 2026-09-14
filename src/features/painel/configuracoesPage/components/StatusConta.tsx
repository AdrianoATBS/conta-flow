export default function StatusConta(){
    const estaAtivo = true;
    return(
        <section className="w-full mb-5 p-2 border-borda border rounded-md shadow-inner flex flex-col gap-2">
                <h2 className="text-xs text-primaria ">Status da Conta</h2>
                <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${estaAtivo ? "bg-green-500" : "bg-red-500"}`} 
                    ></div>
                    <p className="text-sm">Ativo e Verificado</p>
                </div>
                <p className="text-xs text-primaria">Membro desde Outubro de 2023</p>
        </section>
    )
}
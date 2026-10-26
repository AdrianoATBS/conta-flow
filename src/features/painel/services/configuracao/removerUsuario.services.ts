import  fetcher  from "@/lib/fetcher";
export async function removerUsuario() {
    return await fetcher(`/api/Usuarios/deletar`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    });
}
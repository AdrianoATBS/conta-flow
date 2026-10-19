import fetcher from "@/lib/fetcher";
export async function reativarUsuario() {
    return await fetcher(`/api/Usuarios/reativar`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
    });
}
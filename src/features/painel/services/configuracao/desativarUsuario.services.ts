
import fetcher from "@/lib/fetcher";
export async function desativarUsuario() {
    return await fetcher(`/api/Usuarios/desativar`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
    });

}
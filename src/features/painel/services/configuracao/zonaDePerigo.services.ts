
import fetcher from "@/lib/fetcher";
export async function zonaDePerigo() {
    return await fetcher(`/api/Usuarios/desativar`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({}),
    });

}
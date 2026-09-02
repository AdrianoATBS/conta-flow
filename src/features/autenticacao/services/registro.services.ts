import fetcher from "@/lib/fetcher";
import { RegistroRequest } from "../types/registro/registroRequest";

export async function registroService(registro: RegistroRequest){
    return await fetcher<void>("/api/Usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registro)
    });
}
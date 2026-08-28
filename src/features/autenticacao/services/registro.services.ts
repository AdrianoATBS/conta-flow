import fetcher from "@/lib/fetcher";
import { RegistroRequest } from "../types/login/registroRequest";

export async function registroService(registro: RegistroRequest){
    return await fetcher<RegistroRequest>("/api/Usuarios", {
        method: "POST",
        body: JSON.stringify({
            nome: registro.nome,
            email: registro.email,
            senha: registro.senha
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
}
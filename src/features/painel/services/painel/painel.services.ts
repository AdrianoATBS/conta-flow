import { PainelResponse } from "../../types/painel/painelResponse";
import fetcher from "@/lib/fetcher";

export async function painelService(){
    return await fetcher<PainelResponse>(`/api/Usuarios/me`,{
        method: "GET",

    });
}
import fetcher  from "@/lib/fetcher";
import { EditarNomeRequest } from "../../types/configuracao/editarNomeRequest";
import { EditarNomeResponse } from "../../types/configuracao/editarNomeResponse";

export async function editarNomeService(request: EditarNomeRequest){
    return await fetcher<EditarNomeResponse>(`/api/Usuarios/nome`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request),
    });
}
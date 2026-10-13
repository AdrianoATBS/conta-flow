import fetcher  from "@/lib/fetcher";
import { EditarPerfilRequest } from "../../types/configuracao/editarPerfilRequest";
import { EditarPerfilResponse } from "../../types/configuracao/editarPerfilResponse";

export async function editarPerfilService(request: EditarPerfilRequest){
    return await fetcher<EditarPerfilResponse>(`/api/Usuarios/nome`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request),
    });
}
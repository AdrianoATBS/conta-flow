import { EditarEmailRequest } from "../../types/configuracao/editarEmailRequest";
import { editarEmailResponse } from "../../types/configuracao/editarEmailResponse";
import fetcher from "@/lib/fetcher"
export async function editarEmailService(request: EditarEmailRequest){
    return await fetcher<editarEmailResponse>(`/api/Usuarios/email`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request),

    });
}
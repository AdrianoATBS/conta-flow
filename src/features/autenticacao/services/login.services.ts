import fetcher from "@/lib/fetcher";
import { LoginRequest } from "../types/login/loginRequest";

export async function loginService(login: LoginRequest){
    return await fetcher<void>("/api/Usuarios/login", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(login)
    })
}
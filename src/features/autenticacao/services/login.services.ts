import fetcher from "@/lib/fetcher";
import { LoginRequest } from "../types/login/loginRequest";
import { LoginResponse } from "../types/login/loginResponse";

export async function loginService(login: LoginRequest){
    return await fetcher<LoginResponse>("/api/Usuarios/login", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(login)
    })
}
import { useState } from "react";
import { SubmitEvent } from "react";
import { loginService } from "../services/login.services";
import { useRouter } from "next/navigation";
export function useLogin(){
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [token, setToken] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async  (e: SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(!email || !senha){
            alert("Por favor, preencha todos os campos.");
            return; 
        }
        if(senha.length < 6){
            alert("A senha deve ter no mínimo 6 caracteres.");
            return;
        }
        try{
            const response = await loginService({ email, senha, });
            setToken(response.accessToken);
            localStorage.setItem("token", response.accessToken);
            console.log("Token armazenado no localStorage:", response.accessToken);

            router.push("/");
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
        setEmail("");
        setSenha("");
    }

    return {
        email,
        senha,
        token,
        handleSubmit,
        setEmail,
        setSenha
    };
}
import { useState } from "react";
import { SubmitEvent } from "react";
import { registroService } from "../services/registro.services";
import { useRouter } from "next/navigation";
export function useCadastro() {
    const router = useRouter();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!nome || !email || !senha){
            alert("Por favor, preencha todos os campos.");
            return; 
        }
        if(senha !== confirmarSenha){
            alert("As senhas estão diferentes.");
            return;
        }
    
        try {
            await registroService({ nome, email, senha });
            router.push("/login");
        }catch(error){
            console.error("Erro ao registrar:", error);
        }

        setNome("");
        setEmail("");
        setSenha("");
        setConfirmarSenha("");
    }
    return {
        nome,
        email,
        senha,
        confirmarSenha,
        handleSubmit,
        setNome,
        setEmail,
        setSenha,
        setConfirmarSenha
    }
}
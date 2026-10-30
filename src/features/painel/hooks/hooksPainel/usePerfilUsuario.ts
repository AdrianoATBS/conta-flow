import { useState, useEffect } from "react";
import { painelService } from "../../services/painel/painel.services";

export function UsePerfilUsuario() {
        const [nome, setNome] = useState<string>("");
        const [email, setEmail] = useState<string>("");
        const [criadoEm, setCriadoEm] = useState<string>("");
    
        useEffect(() => {
            const  fetchPainel = async () => {
                try{
                    const response = await painelService();
                    setNome(response.nome);
                    setEmail(response.email);
                    setCriadoEm(response.criadoEm);
                } catch (error) {
                    console.error("Erro ao buscar dados do painel:", error);
                }
            }
            fetchPainel();
        }, [])
    
    return {nome, email, criadoEm};
}
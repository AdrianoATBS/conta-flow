import { useState, useEffect } from "react";
import { painelService } from "../services/painel/painel.services";
export function usePainelDados() {
        const [nome, setNome] = useState<string>("");
        const [novoEmail, setNovoEmail] = useState<string>("");
        const [id, setId] = useState<string>("");
    
        useEffect(() => {
            const fetchConfiguracoes = async () => {
                try{
                    const response = await painelService();
                    setId(response.id);
                    setNovoEmail(response.email);
                    setNome(response.nome);
    
                }catch (error) {
                    console.error("Erro ao buscar dados do painel:", error);
                }
            }
            fetchConfiguracoes();
        }, []);  
        return {nome, novoEmail, id, setNome, setNovoEmail, setId};
}
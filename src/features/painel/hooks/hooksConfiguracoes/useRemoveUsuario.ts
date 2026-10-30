import { removerUsuario } from "../../services/configuracao/removerUsuario.services";
export function useRemoveUsuario() {
        const handleRemoverUsuario =  async () => {
            try{
                const response = await removerUsuario();
                console.log("Conta removida com sucesso:", response);
            }
            catch (error) {
                console.error("Erro ao remover conta:", error);
                throw error; 
            }
        }
    return { handleRemoverUsuario };
}
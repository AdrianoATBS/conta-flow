import { desativarUsuario } from "../services/configuracao/desativarUsuario.services";
import { reativarUsuario } from "../services/configuracao/reativarUsuario.services";
export function useAcoesConta() {
     const handleDesativarConta = async () => {
            try{
                const response = await desativarUsuario();
                console.log("Conta desativada com sucesso:", response);
            } catch (error) {
                console.error("Erro ao desativar conta:", error);
            }
        }
    
        const handleReativarConta = async () => {
            try{
                const response = await reativarUsuario();
                console.log("Conta reativada com sucesso:", response);
            } catch (error) {
                console.error("Erro ao reativar conta:", error);
            }
        }
    return {handleDesativarConta, handleReativarConta};
}
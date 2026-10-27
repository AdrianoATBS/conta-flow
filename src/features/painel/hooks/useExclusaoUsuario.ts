import { useRouter } from "next/navigation";
import { useContagemRegressiva } from "@/features/painel/hooks/useContagemRegressiva";
export interface ExclusaoUsuarioProps {
    fecharModal: () => void;
    removeUsuario: () => Promise<void>;
}
export function useExclusaoUsuario({ fecharModal, removeUsuario }: ExclusaoUsuarioProps) {
    const tempo = useContagemRegressiva();

    const desativado = tempo > 0;

    const rota = useRouter();

    const tratarExclusao = async () => {
        if(!desativado && removeUsuario){
            try{
                await removeUsuario();
                fecharModal();
                rota.push("/login");
            }
            catch (error) {
                console.error("Erro ao remover conta:", error);
            }
        }
    }
    return { desativado, tratarExclusao, tempo };
}
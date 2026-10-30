import { editarNomeService } from "../../services/configuracao/editarNome.services";
import { editarEmailService } from "../../services/configuracao/editarEmail.services";
import { usePainelDados } from "./usePainelDados";
export function useEditarPerfil(){
    const dadosIniciais = usePainelDados();

    const salvarNoBanco = async (dadosAtualizados: {id: string, nome: string, novoEmail:string },
            campoAlterado: "nome" | "novoEmail" ) => {
                try{
                    if(campoAlterado === "nome" ){
                        const responseNome = await editarNomeService({id:dadosAtualizados.id, nome: dadosAtualizados.nome});
                        console.log("Dados do nome atualizados salvos no banco:", responseNome);
                        dadosIniciais.setNome(dadosAtualizados.nome);
                    
                    }else if(campoAlterado === "novoEmail"){
                        const responseEmail = await editarEmailService({id:dadosAtualizados.id, novoEmail: dadosAtualizados.novoEmail});
                        console.log("Dados do email atualizados salvos no banco:", responseEmail);    
                        dadosIniciais.setNovoEmail(dadosAtualizados.novoEmail);
                    }
                  
                }
                catch (error) {
                    console.error("Erro ao salvar dados no banco:", error);
                }
           }

       return {salvarNoBanco}
}
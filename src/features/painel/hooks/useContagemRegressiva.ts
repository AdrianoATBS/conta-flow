import { useEffect, useState } from "react";

export function useContagemRegressiva(){
    const [tempo, setTempo] = useState(30);
    useEffect(() => {
        if(tempo <= 0) return;

        const temporizador = setInterval(() => {
            setTempo((prevTempoAnterior) => {
                if(prevTempoAnterior <= 1){
                    clearInterval(temporizador);
                    return 0;
                }
                return prevTempoAnterior - 1;
            });
        }, 1000);
        return () => clearInterval(temporizador);
    }, [tempo]);

    return tempo;
    
}
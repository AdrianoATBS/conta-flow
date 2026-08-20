type BotaoVariante = "primario" | "secundario" | "terciario"
type BotaoTamanho = "sm" | "md" | "lg"

const variantClasses = {
    primario: "bg-botao-primario text-white",
    secundario: "bg-botao-secundario text-black",
    terciario: "bg-botao-terciario text-white"
}
const sizeClasses = {
    sm: "px-3 py-1.5 text-sm rounded",
    md: "px-5 py-2.5 text-base rounded-md",
    lg: "px-7 py-3 text-lg rounded-lg"
}

interface BotaoGenericoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variante?: BotaoVariante,
    tamanho?: BotaoTamanho,
    texto?: string,

}

export default function BotaoGenerico({variante="primario", tamanho="md", texto,
    className = "", ...props}: 
    BotaoGenericoProps){
    return(
        <button  className={`cursor-pointer ${variantClasses[variante]} 
        ${sizeClasses[tamanho]} ${className}`} {...props}>
            {texto}
        </button>
    )
}
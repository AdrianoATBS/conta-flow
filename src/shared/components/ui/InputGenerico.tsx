import { cn } from "@/shared/utils/cn"
type InputTamanho = "sm" | "md" | "lg"
type InputCores = "secundaria" | "superficie"

const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg"   

}
const colorClasses = {
    secundaria: "botao-secundario text-gray-400",  
    superficie: "bg-superficie text-black"
}

interface InputGenericoProps extends React.InputHTMLAttributes<HTMLInputElement>{
    tamanho?: InputTamanho,
    cores?: InputCores,
    label?: string
}

export default function InputGenerico({tamanho="md", cores="superficie",
     className, label, ...props}: InputGenericoProps){
    return(
        <div className="flex flex-col gap-1">
            {label && (
                <label>{label}</label>
            )}
            <input {...props}
            className={cn(`w-full border ${sizeClasses[tamanho]} ${colorClasses[cores]} ${className}`)} />
        </div>

    )
}
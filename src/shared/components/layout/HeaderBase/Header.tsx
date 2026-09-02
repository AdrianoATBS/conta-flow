type HeaderProps = {
    esquerda: React.ReactNode;
    centro: React.ReactNode;
    direita: React.ReactNode;
}
export default function Header({ esquerda, centro, direita }: HeaderProps) {
    return(
        <header className="w-full flex items-center 
        justify-between px-4 py-2 bg-white shadow-md border-b border-[#E5E2E1]">
            <div className="shrink-0">
                {esquerda}
            </div>
            <div className="grow text-center">
                {centro}
            </div>
            <div className="shrink-0">
                {direita}
            </div>
        </header>
    )
}
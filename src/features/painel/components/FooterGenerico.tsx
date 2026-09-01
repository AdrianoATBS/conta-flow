import Link from "next/link";

interface FooterGenericoProps {
    paragrafo: string;
    links: string[];
}
export default function FooterGenerico({ paragrafo, links }: FooterGenericoProps){
    const anoAtual = new Date().getFullYear();
    return(
        <footer className="w-full flex flex-col mt-auto p-4 border-t border-[#E5E5E5] 
        bg-white pb-10 ">
            <p className="text-xs font-bold">© {anoAtual} {paragrafo}</p>
            <nav>
                <ul className="flex gap-4  ">
                    {links.map((link, index) => (
                        <li key={index} className="text-xs text-[#5E5E5E] hover:underline">
                            <Link  href="#">{link}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </footer>
    )
}
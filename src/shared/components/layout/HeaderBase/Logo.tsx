import Link from "next/link";

interface LogoProps {
    EhHome?: boolean;
}
export default function Logo({ EhHome = false }: LogoProps) {
    const Tag = EhHome ? "h1" : "p";
    return(
        <Tag className="text-xl font-bold text-primaria ">
            <Link href="/">
                ContaFlow
            </Link>
        </Tag>
    )
}
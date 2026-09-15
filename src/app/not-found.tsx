    import Image from "next/image";
    import{ Header, Logo, BotaoSuporte}  from "@/shared/components/layout/HeaderBase";
    import { BotaoGenerico } from "@/shared/components/ui";
    import Link from "next/link";
    export default function NotFound() {
        return(
            <main className=" w-full flex flex-col items-center min-h-screen">
                <Header 
                esquerda={<Logo EhHome={true} />}
                centro={null}
                direita={<BotaoSuporte/>}
                />
                <section className="max-w-xl flex flex-col items-center justify-center gap-4 mt-4 p-2">
                    <div className="relative w-full h-56 md:h-64 lg:h-96">
                        <Image src="/not-found.png" alt="404" 
                        fill
                        className="object-contain "
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
                    </div>
                    <h2 className="text-2xl font-bold text-center">404 - Página não encontrada</h2>
                    <p className="text-center text-texto-atenunado">
                        Parece que o link que você seguiu não existe
                        mais ou foi movido para uma nova localização.
                        Não se preocupe, vamos te levar de volta.
                    </p>
                    <div className="w-full flex flex-col gap-2 mt-2 mb-4">
                        <Link href="/"  >
                            <BotaoGenerico texto="<- Voltar ao inicio" className="bg-botao-primario
                            hover:bg-botao-primario/70 active:scale-95 w-full" />
                        </Link>
                        <Link href="#" >
                            <BotaoGenerico texto="Página anterior" className="bg-transparent text-texto
                            border-2 border-terciaria active:scale-95 w-full" />
                        </Link>
                    </div>
                </section>
            </main>
        )
    }
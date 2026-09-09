import { Header, Logo, Icons

} from "@/shared/components/layout/HeaderBase";

export default function HeaderConfiguracoes() {
    return(
        <header>
            <Header
                esquerda={<Logo EhHome={false} /> }
                centro={null}
                direita={
                    <Icons />
                }

            />
        </header>
    )
}
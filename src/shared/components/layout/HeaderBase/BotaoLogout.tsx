import { BotaoGenerico } from "../../ui";
interface BotaoLogoutProps{
    removeToken: () => void;
}
export default function BotaoLogout({removeToken}: BotaoLogoutProps) {
    return(
        <BotaoGenerico texto="Sair" className="text-[#5E5E5E] bg-white text-xs px-1 " onClick={removeToken} />
    )
}
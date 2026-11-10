import { useRouter } from "next/navigation";
export function useRemoveToken() {
     const rota = useRouter();
    
    const removeToken = () => {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        rota.push("/login");
    }
    return { removeToken };
}
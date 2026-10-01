import { BASE_URL } from "./api";

export default async function fetcher<T>(endpoint:string, options: 
    RequestInit = {}): Promise<T>{

        const headers = new Headers(options.headers);
        if(typeof window !== "undefined"){
            const token = localStorage.getItem("token");
            if(token){
                headers.set("Authorization", `Bearer ${token}`);
            }
        }
        const config: RequestInit = {
            ...options,
            headers: headers
        }
        const response = await fetch(`${BASE_URL}${endpoint}`, config);
        if(!response.ok){
            const errorMessage = await response.text().catch(() => "");

            throw new Error(`Erro ${response.status}: ${errorMessage || response.statusText}`);
        }
        return await response.json();
}
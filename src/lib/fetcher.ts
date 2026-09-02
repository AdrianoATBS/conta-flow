import { BASE_URL } from "./api";

export default async function fetcher<T>(endpoint:string, options?: 
    RequestInit): Promise<T>{
        
        const response = await fetch(`${BASE_URL}${endpoint}`, options);
        if(!response.ok){
            const errorMessage = await response.text().catch(() => "");

            throw new Error(`Erro ${response.status}: ${errorMessage || response.statusText}`);
        }
        return await response.json();
}
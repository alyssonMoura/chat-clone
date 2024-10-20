import OpenAI from "openai";
import dotenv from "dotenv";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Verifica se a chave da API está definida
if (!process.env.OPENAI_API_KEY) {
    throw new Error("A chave da API OpenAI não está definida no arquivo .env");
}

// Cria uma instância do cliente OpenAI com tipagem
export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Define a interface para os parâmetros da requisição
export interface CompletionParams {
    model: string;
    prompt: string;
    temperature: number;
    max_tokens: number;
    top_p: number;
    frequency_penalty: number;
    presence_penalty: number;
}

// Define a função assíncrona para criar a completion
export async function createCompletion(params: CompletionParams): Promise<string> {
    try {
        const response = await openai.completions.create(params);
        return response.choices[0].text.trim();
    } catch (error) {
        console.error("Erro ao criar completion: =>", error);
        const response = "Erro ao criar completion: =>";
        return response;
    }
}

// Exporta uma função de configuração padrão
export function getDefaultCompletionParams(prompt: string): CompletionParams {
    return {
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
        temperature: 0,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    };
}
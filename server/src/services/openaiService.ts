import { createCompletion, getDefaultCompletionParams } from '../config/openAIConfig';

async function getChatResponse(prompt:string) {
    const params = getDefaultCompletionParams(prompt);
    try {
        const result = await createCompletion(params);
        console.log("Resposta:", result);
        return result;
    } catch (error) {
        console.error("Erro na execução:", error);
    }
}
export default getChatResponse;
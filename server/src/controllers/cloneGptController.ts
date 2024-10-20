import { Request, Response } from 'express';
import InputPrompt from '../models/InputPrompt ';
import { createCompletion, getDefaultCompletionParams } from '../config/openAIConfig';
import getChatResponse from '../services/openaiService';
interface OpenAIResponse {
    choices: { text: string }[];
}
export const sendText = async(req: Request, res: Response): Promise<void> => {
    const inputModel = new InputPrompt(req.body);
    try {
        const response = await getChatResponse(inputModel.prompt);
        res.status(200).json({
            success: true,
            data: response
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            error: error.response ? error.response.data : "There was an issue on the server"
        });
    }
}


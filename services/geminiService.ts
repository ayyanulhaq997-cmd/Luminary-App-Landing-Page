
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a friendly AI Sales Assistant for "Luminary", a premium productivity mobile app.
Your goal is to answer visitor questions about the app's features:
- Focus Mode: Blocks distractions and uses deep work timers.
- Smart Insights: Weekly AI summaries of how you spent your time.
- Cloud Sync: Works seamlessly across iOS, Android, and Web.
- Collaborative Tasks: Share lists and projects with teams.
Pricing: Luminary is free to start, with a Pro plan at $4.99/mo for advanced insights and unlimited cloud storage.
Be concise, professional, and enthusiastic.
If asked about downloads, direct them to use the "Download Now" buttons in the navigation.
`;

export const getAssistantResponse = async (userPrompt: string) => {
  try {
    // Re-initialize right before use to ensure the latest process.env.API_KEY is used
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // Handle specific error indicating no valid key is present/selected
    if (error.message?.includes("Requested entity was not found") || error.status === 404) {
       if (typeof window !== 'undefined' && (window as any).aistudio) {
         await (window as any).aistudio.openSelectKey();
         return "I've opened the API key selection dialog. Once you've selected a valid key, please try your question again!";
       }
    }
    
    return "Something went wrong. Please check your connection or ensure an API key is configured correctly.";
  }
};

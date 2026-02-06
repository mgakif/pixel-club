
import { GoogleGenAI, Type } from "@google/genai";

// Safe access to API Key
const getApiKey = () => {
  try {
    return process.env.API_KEY || '';
  } catch (e) {
    return '';
  }
};

export const generateAIQuest = async (topic: string) => {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.error("API Key is missing. AI Quest generation will not work.");
    return null;
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a retro gaming quest for a high school gaming club about ${topic}.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            xp: { type: Type.STRING },
            tag: { type: Type.STRING },
            tagColor: { type: Type.STRING, description: "A tailwind color class name like bg-primary, bg-arcade-yellow, or bg-pixel-purple" },
            imageUrl: { type: Type.STRING, description: "A placeholder image URL from picsum" }
          },
          required: ["title", "description", "xp", "tag", "tagColor", "imageUrl"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error generating quest:", error);
    return null;
  }
};

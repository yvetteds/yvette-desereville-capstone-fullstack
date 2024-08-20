import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

/* This file was used to test the Google's Generative Ai Gemini API before 
intgrating it into the front end. */

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "What are the challenges of quantum computing?";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();

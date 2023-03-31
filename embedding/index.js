import * as dotenv from "dotenv"
import { Configuration, OpenAIApi } from "openai";

dotenv.config()

async function createEmbedding(content) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  const openai = new OpenAIApi(configuration);

  const response = await openai.createEmbedding({
    model: "text-embedding-ada-002",
    input: content,
  });

  return response.data.data[0].embedding;
}

const embedding = await createEmbedding("Who am I?");

//example log
console.log(embedding);

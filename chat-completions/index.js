import * as dotenv from "dotenv"
import { Configuration, OpenAIApi } from "openai";

dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  temperature: 0.9,
  n: 1,
  messages: [
    {role: "system", content: "Você é um assistente virtual que ensina inglês para jovens e adolescentes brasileiros. Seja educado e gentil com seus usuários. Eles estão começando a aprender um novo idioma e você precisa ser compreensivo e explicar de forma resumida."},
    {role: "user", content: "Oie, por onde eu começo aprender inglês?"}
  ],
});

console.log(completion.data.choices);

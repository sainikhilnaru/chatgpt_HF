/*
  This is a sample GPT-3 bot that uses the Promptable API to get a prompt and config
  and then uses the OpenAI API to generate a response.

  If you don't want to use Promptable, you can just hard-code your prompt and config
  somewhere in this file and replace the call to the Promptable API with a local call.
*/

const { Configuration, OpenAIApi } = require("openai");
import GPT3Tokenizer from "gpt3-tokenizer";
import axios from "axios";
import { ChatHistory, ChatHistoryStore, Turn } from "./chatHistory";
import { PromptableApi } from "promptable";




type PurchasedSMSMessage = {
  text: string;
};







/*
  Get or create a chat history for a phone number
*/




export const getPurchaseReply = async (
  message: string,
  phoneNumber: string
): Promise<PurchasedSMSMessage> => {
  message = "This is a test message"
  console.log("Number", phoneNumber, "Message", message.trim());
  // strip whitespace!
  message = message.trim();
  // getOrCreateChatHistory(phoneNumber, message);
  // store.add(phoneNumber, message, "User");
  // const chatHistory = store.get(phoneNumber);
  // console.log("Chat History", chatHistory);

  // Get the prompt and config from the Promptable API
  // (Optionally) replace this call with a local hard-coded prompt and config
  


  // const prompt = formatPromptText(chatHistory, data.text);
  

  const agentText = message.trim();
  return {
    text: agentText,
  } as PurchasedSMSMessage;
};

/*
  This is a sample GPT-3 bot that uses the Promptable API to get a prompt and config
  and then uses the OpenAI API to generate a response.

  If you don't want to use Promptable, you can just hard-code your prompt and config
  somewhere in this file and replace the call to the Promptable API with a local call.
*/

// const { Configuration, OpenAIApi } = require("openai");
// import GPT3Tokenizer from "gpt3-tokenizer";
// import axios from "axios";
// import { ChatHistory, ChatHistoryStore, Turn } from "./chatHistory";
// import { PromptableApi } from "promptable";




type PurchasedSMSMessage = {
  text: string;
};







/*
  Get or create a chat history for a phone number
*/

export function validateMessageCheck( SMSMessage: string) {
  //avoid combination of uppercase and lowercase

  if (SMSMessage.toLowerCase() == "purchased"){
    return  SMSMessage;
  }else{
    return "null";
  }
}



export const getPurchaseReply = async (
  message: string,
  phoneNumber: string
): Promise<PurchasedSMSMessage> => {
  if (validateMessageCheck(message) == "null") {
    
    return {
      text: "NO RESPONSE",
    } as PurchasedSMSMessage;
  }

  //function to check if user has an active subscription with Strip
    //check if user has active subscription in stripe database of users who purchased the product
  message = "Please go to https://sainikhils-five-star-site.webflow.io/software-package"+ 
  " and copy and paste the password \"ThanksForSubcribing:)\" to access the page. If you have any questions, you can contact us at" +
  " Please don't respond or text this automated messsage." +
  " As always, thanks for subscribing with us and hope you have a great day!"
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

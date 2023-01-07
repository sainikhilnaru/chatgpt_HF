import { twiml } from "twilio";
import { urlencoded, Router, Response } from "express";
import { MessagingRequest } from "../types/request";
import { getPurchaseReply } from "../src/purchasedResponseTemplates"

const { MessagingResponse } = twiml;
const router = Router();
router.use(urlencoded({ extended: false }));


router.post("/", async (req: MessagingRequest, res: Response<string>) => {
  const userMessage = req.body.Body;
  const response = new MessagingResponse();
  try {
    // const reply = await getReply(userMessage, req.body.From);
    // const reply = { text: "sample text reponse to sms text"};
    const reply = await getPurchaseReply(userMessage, req.body.From);
    console.log("msg from custom text", req.body.From, req.body.To, req.body.Body)
    response.message(reply.text);
  } catch (error) {
    console.error(error);
    response.message(`Failed to reply for ${userMessage}.`);
  }
  res.contentType("application/xml");
  res.send(response.toString());
});

export default router;

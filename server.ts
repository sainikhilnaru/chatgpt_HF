import express from "express";
import messageRouter from "./routes/messages";
import CustomSMSMessageRouter from "./routes/sendCustomSMSMessage";


const app = express();

app.use("/messages", messageRouter);
app.use("/purchaseSubscription", CustomSMSMessageRouter);
app.get('/', (req, res) => {
  res.send('200 OK testing!');
});

export default app;

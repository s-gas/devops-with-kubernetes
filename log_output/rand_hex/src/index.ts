import express from 'express';
import crypto from 'crypto';
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

const randomString = crypto.randomUUID();

app.get('/', (_req, res) => {
  res.send(`${new Date().toISOString()}: ${randomString}`);
});

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});

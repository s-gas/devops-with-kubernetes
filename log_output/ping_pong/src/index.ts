import express from 'express';
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

let counter = 0;

app.get('/pingpong', (_req, res) => {
  res.send(`pong ${counter}`);
  counter++;
});

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});

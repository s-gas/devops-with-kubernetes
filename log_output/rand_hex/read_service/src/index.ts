import express from 'express';
import fs from 'fs/promises';
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

const filePath = "/shared/file.txt";

app.get('/', async (_req, res) => {
  try {
    const file = await fs.readFile(filePath, 'utf8');
    res.send(file);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});

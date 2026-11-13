import crypto from 'crypto';
import fs from 'fs';

const randomString = crypto.randomUUID();
const filePath = "/shared/file.txt";

setInterval(() => {
  const entry = `${new Date().toISOString()}: ${randomString}\n`;
  fs.appendFileSync(filePath, entry);
}, 5000);

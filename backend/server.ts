const express = require('express');

const app = express();

app.get('/', (req: any, res: any) => res.send('Express + TypeScript Server'));
app.listen(8000, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Server is running at https://localhost:${8000}`);
});

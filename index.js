const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("Hi, I'm Akanksha Shinde from D15C");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  if (!req.body || !req.body.name) {
    return res.status(400).send('Missing user name');
  }
  const user = req.body;
  console.log(user.name);
  res.send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));
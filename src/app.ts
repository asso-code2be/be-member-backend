import * as express from 'express';

const app: express.Application = express();

app.get(`/`, (req, res) => {
    res.send(`Hello world !`);
});
  
app.listen(3000, () => console.log(`Listening on port 3000`)); // eslint-disable-line

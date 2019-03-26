import * as express from 'express';

const app: express.Application = express();

app.get(`/`, (req, res) => {
    res.send(`Hello world !`);
});

const port = process.env.PORT || 3000;
  
app.listen(port, () => console.log(`Listening on port ${port}`)); // eslint-disable-line

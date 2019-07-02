import "reflect-metadata"; // this shim is required
import * as express from 'express';
import { useExpressServer, useContainer } from 'routing-controllers';
import { Container } from "typedi";

const app: express.Application = express();

useContainer(Container);

app.get(`/`, (req, res) => {
    res.send(`Hello, welcome at Be-Member backend !`);
});

useExpressServer(app, {
  controllers: [MembersController]
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`)); // eslint-disable-line

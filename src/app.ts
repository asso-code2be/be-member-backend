import "reflect-metadata"; // this shim is required
import { config } from "dotenv";
config();

import * as express from 'express';
import { useExpressServer, useContainer } from 'routing-controllers';
import { Container } from "typedi";
import { knexInstance } from "./lib/knex";

knexInstance.migrate.latest();

const app: express.Application = express();

useContainer(Container);

app.get(`/`, (req, res) => {
    res.send(`Hello, welcome at Be-Member backend !`);
});

useExpressServer(app, {
  controllers: [__dirname + "/controllers/*{.js,.ts}"]
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`)); // eslint-disable-line

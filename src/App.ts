import * as dotenv from 'dotenv';
dotenv.config();
import * as express from 'express';
import * as cors from 'cors';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as Bundler from 'parcel-bundler';



class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger(`dev`));
    this.express.use(cors());
    this.express.use((new Bundler(`index.js`, {})).middleware());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    const router = express.Router();
    router.get('/', (req, res, next) => {
      res.redirect(`/hello-world`);
    });
    router.get(`/hello-world`, (req, res) => {
      res.json({
        message: 'Hello World!'
      });
    });
    this.express.use('/', router);
  }
}

export default new App().express;
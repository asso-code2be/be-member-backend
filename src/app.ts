import * as express from 'express';
import { useExpressServer } from 'routing-controllers';

import { MembersController } from './controllers';
import { CompaniesController } from './controllers';
import { IndividualsController } from './controllers';

const app: express.Application = express();

app.get(`/`, (req, res) => {
    res.send(`Hello, welcome at Be-Member backend !`);
});

useExpressServer(app, {
  controllers: [MembersController,CompaniesController,IndividualsController]
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`)); // eslint-disable-line

import { JsonController, Get } from 'routing-controllers';
import { IndividualList } from '../viewModels';

// https://codebrains.io/express-typescript-routing-controllers/
// https://github.com/typestack/routing-controllers

@JsonController('/individuals')
export class IndividualsController {
  constructor() {
  }

  @Get()
  getIndividuals() {
    const results: IndividualList[] = [
      { id: '123-abc', email: 'john@doe.io', displayName: 'John Doe',firstName:'John', lastName:'Doe'},
      { id: '234-bcd', email: 'jane@doe.io', displayName: 'Jane Doe',firstName:'Jane', lastName:'Doe'}
    ]

    return results;
  }
}

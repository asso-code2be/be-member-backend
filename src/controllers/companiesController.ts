import { JsonController, Get } from 'routing-controllers';
import { CompanyList } from '../viewModels';

// https://codebrains.io/express-typescript-routing-controllers/
// https://github.com/typestack/routing-controllers

@JsonController('/companies')
export class CompaniesController {
  constructor() {
  }

  @Get()
  getCompagnies() {
    const results: CompanyList[] = [
      { id: '123-abc', email: 'john@doe.io', displayName: 'John Doe SARL', name: 'Doe'},
      { id: '234-bcd', email: 'jane@doe.io', displayName: 'Jane Doe EURL', name: 'Doe'},
    ]

    return results;
  }
}

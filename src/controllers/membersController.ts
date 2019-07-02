import { JsonController, Get } from 'routing-controllers';
import { MemberList } from '../viewModels';

// https://codebrains.io/express-typescript-routing-controllers/
// https://github.com/typestack/routing-controllers

@JsonController('/members')
export class MembersController {
  constructor() {
  }

  @Get()
  getMembers() {
    const results: MemberList[] = [
      { id: '123-abc', email: 'john@doe.io', displayName: 'John Doe'},
      { id: '234-bcd', email: 'jane@doe.io', displayName: 'Jane Doe'}
    ]

    return results;
  }
}
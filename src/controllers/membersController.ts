import { JsonController, Get } from 'routing-controllers';
import { MemberList } from '../viewModels';
import {Member} from "../models/Member";

// https://codebrains.io/express-typescript-routing-controllers/
// https://github.com/typestack/routing-controllers

@JsonController('/members')
export class MembersController {
  constructor() {
  }

  @Get()
  async getMembers() {
    return await Member.query();
  }
}

import {JsonController, Get, Post, Body} from 'routing-controllers';
import { MemberList } from '../viewModels';
import {Member} from "../models/Member";
import IMember from "../types/IMember";
import * as uuid from 'uuid';

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

  @Post()
  async createMembers (@Body() member: Member) {
    return await Member.query().insert({
      firstname: member.firstname,
      lastname: member.lastname,
      email: member.email,
    });
  }
}

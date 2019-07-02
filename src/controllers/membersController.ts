import {JsonController, Get, Post, Body} from 'routing-controllers';
import { MemberList } from '../viewModels';
import {Member} from "../models/Member";
import IMember from "../types/IMember";

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
    await Member.query().insert({

    });
    return member;
  }
}

import {JsonController, Get, Post, Body} from 'routing-controllers';
import { MemberList } from '../viewModels';
import {Member} from "../models/Member";
import { MemberRepository } from '../repositories';

// https://codebrains.io/express-typescript-routing-controllers/
// https://github.com/typestack/routing-controllers

@JsonController('/members')
export class MembersController {
  constructor(private memberRepository: MemberRepository) {
    console.log('repo', this.memberRepository);
  }

  @Get('/')
  async getMembers(): Promise<MemberList[]> {
    return await this.memberRepository.GetAll();
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

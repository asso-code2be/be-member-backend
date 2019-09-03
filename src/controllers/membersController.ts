import {JsonController, Get, Post, Body} from 'routing-controllers';
import { MemberList } from '../viewModels';
import { MemberRepository } from '../repositories';
import { Member } from '../models/Member';

// https://codebrains.io/express-typescript-routing-controllers/
// https://github.com/typestack/routing-controllers

@JsonController('/members')
export class MembersController {
  constructor(private memberRepository: MemberRepository) {
  }

  @Get('/')
  async getMembers(): Promise<Member[]> {
    return await this.memberRepository.getAll();
  }

  @Post('/')
  async createMembers (@Body() member: any) {
    return await Member.query().insert({
      firstname: member.firstname,
      lastname: member.lastname,
      email: member.email,
    });
  }
}

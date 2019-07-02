import { JsonController, Get } from 'routing-controllers';
import { MemberList } from '../viewModels';
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
}
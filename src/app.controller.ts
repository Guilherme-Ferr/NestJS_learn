import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-dto';
import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Controller('users')
export class AppController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {}

  @Post('create')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, fun } = body;

    await this.rocketMembersRepository.create(name, fun);
  }
}

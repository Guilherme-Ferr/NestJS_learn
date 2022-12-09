import { Body, Controller, Post } from '@nestjs/common';
import { RocketTeamMember } from '@prisma/client';
import { randomUUID } from 'crypto';
import { PrismaService } from './database/prisma.service';
import { CreateTeamMemberBody } from './dtos/create-team-member-dto';

@Controller('users')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Post('create')
  async getHello(
    @Body() body: CreateTeamMemberBody,
  ): Promise<RocketTeamMember> {
    const { name, fun } = body;

    return await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name: name,
        function: fun,
      },
    });
  }
}

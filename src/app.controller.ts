import { Body, Controller, Post } from '@nestjs/common';
import { RocketTeamMember } from '@prisma/client';
import { randomUUID } from 'crypto';
import { PrismaService } from './database/prisma.service';

@Controller('users')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Post('create')
  async getHello(@Body() body: any): Promise<RocketTeamMember> {
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

import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { RocketMembersRepository } from '../rocket-members-repository';

@Injectable()
export class PrismaRocketMembersRepository implements RocketMembersRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, fun: string): Promise<void> {
    await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name: name,
        function: fun,
      },
    });
  }
}

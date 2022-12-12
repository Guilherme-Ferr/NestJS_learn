import { IsNotEmpty, Length } from 'class-validator/types/decorator/decorators';

export class CreateTeamMemberBody {
  @IsNotEmpty({
    message: 'The bau should not be vapo',
  })
  @Length(5, 100)
  name: string;

  @IsNotEmpty({
    message: 'The vapo should not be bau',
  })
  fun: string;
}

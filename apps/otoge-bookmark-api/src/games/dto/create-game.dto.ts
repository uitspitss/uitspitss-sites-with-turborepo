import { ApiProperty } from '@nestjs/swagger';

export class CreateGameDto {
  id: string;

  @ApiProperty()
  title: string;
}

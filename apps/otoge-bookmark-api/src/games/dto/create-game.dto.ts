import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}

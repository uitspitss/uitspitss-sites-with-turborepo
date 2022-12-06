import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';
import { ListDto } from '@/common/dto/list.dto';

export class ListSongDto extends ListDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  @ApiPropertyOptional()
  gameId?: string;
}

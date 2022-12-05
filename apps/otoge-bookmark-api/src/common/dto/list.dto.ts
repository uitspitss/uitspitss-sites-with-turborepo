import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsIn } from 'class-validator';

export class ListDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  @ApiPropertyOptional()
  skip?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  @ApiPropertyOptional({ default: '30' })
  take?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  @ApiPropertyOptional()
  cursor?: string;

  @IsString()
  @IsIn(['asc', 'desc'])
  @IsOptional()
  @ApiProperty({
    enum: ['asc', 'desc'],
  })
  @ApiPropertyOptional({
    default: 'asc',
  })
  orderBy?: 'asc' | 'desc';
}

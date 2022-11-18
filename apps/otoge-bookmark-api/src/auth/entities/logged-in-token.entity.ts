import { ApiProperty } from '@nestjs/swagger';

type LoggedInToken = {
  accessToken: string;
  refreshToken: string;
};

export class LoggedInTokenEntity implements LoggedInToken {
  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  refreshToken: string;
}

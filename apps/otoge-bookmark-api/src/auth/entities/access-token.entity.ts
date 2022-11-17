import { ApiProperty } from '@nestjs/swagger';

type AccessToken = {
  access_token: string;
};

export class AccessTokenEntity implements AccessToken {
  @ApiProperty()
  access_token: string;
}

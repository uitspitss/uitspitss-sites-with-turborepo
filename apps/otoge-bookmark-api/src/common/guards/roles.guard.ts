import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import { Role } from '../enums/role.enums';
import { JwtAuthGuard } from './jwt-auth.guard';

export const RolesGuard = (...roles: Role[]): Type<CanActivate> => {
  class RolesGuardMixin extends JwtAuthGuard {
    async canActivate(context: ExecutionContext) {
      await super.canActivate(context);

      console.log(`🚧 | file: roles.guard.ts:6 | RolesGuard | roles`, roles);
      const { user } = context.switchToHttp().getRequest();
      console.log(
        `🚧 | file: roles.guard.ts:11 | RolesGuardMixin | canActivate | user`,
        user,
      );

      return roles.some((role) => user.roles.includes(role));
    }
  }

  return mixin(RolesGuardMixin);
};

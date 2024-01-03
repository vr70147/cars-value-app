import { CanActivate, ExecutionContext } from '@nestjs/common';

export class adminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    if (!req.currentUser) {
      return false;
    }

    return req.currentUser.admin;
  }
}

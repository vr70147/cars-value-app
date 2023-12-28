import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UsersService } from '../users.service';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();
    return req.CurrentUser;
  },
);

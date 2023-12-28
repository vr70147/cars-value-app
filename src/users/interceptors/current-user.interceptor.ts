import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private userService: UsersService) {}
  async intercept(context: ExecutionContext, handler: CallHandler<any>) {
    const req = context.switchToHttp().getRequest();
    const { userId } = req.session;

    if (userId) {
      const user = await this.userService.findUser(userId);
      req.CurrentUser = user;
    }

    return handler.handle();
  }
}

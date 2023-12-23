import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ReportsController } from './reports/reports.controller';
import { ReportsService } from './reports/reports.service';
import { ReportsModule } from './reports/reports.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { Report } from './reports/reports.entity';

@Module({
  imports: [
    ReportsModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Report],
      synchronize: true,
    }),
  ],
  controllers: [AppController, UsersController, ReportsController],
  providers: [AppService, ReportsService],
})
export class AppModule {}

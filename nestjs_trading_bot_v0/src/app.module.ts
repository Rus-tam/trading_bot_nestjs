import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BybitModule } from './bybit/bybit.module';
import { MyConfigModule } from './config.module';

@Module({
  imports: [MyConfigModule, BybitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

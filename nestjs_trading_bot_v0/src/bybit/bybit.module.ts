import { Module } from '@nestjs/common';
import { BybitService } from './bybit.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SocketClient } from 'src/socket/socket-client';

@Module({
  imports: [ConfigModule],
  providers: [
    BybitService,
    {
      provide: SocketClient,
      useFactory: (configService: ConfigService) => {
        const binanceApiUrl = configService.get<string>('BYBIT_API_URL');
        return new SocketClient(binanceApiUrl);
      },
      inject: [ConfigService],
    },
  ],
  // exports: [BybitModule],
})
export class BybitModule { }

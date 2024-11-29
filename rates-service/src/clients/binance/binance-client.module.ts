import { Module } from '@nestjs/common'
import { HttpModule, HttpModuleOptions } from '@nestjs/axios'
import { binanceConfig } from '@configs'
import { BinanceClientService } from './binance-client.service'

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: (): HttpModuleOptions => ({
        baseURL: binanceConfig.url,
        timeout: binanceConfig.timeout,
        validateStatus: (status: number): boolean => status > 199 && status < 300,
      }),
    }),
  ],
  exports: [BinanceClientService],
  providers: [BinanceClientService],
})
export class BinanceClientModule {}

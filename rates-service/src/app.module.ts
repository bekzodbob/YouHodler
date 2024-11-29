import * as redisStore from 'cache-manager-redis-store'
import { Module } from '@nestjs/common'
import { CacheModule } from '@nestjs/cache-manager'
import { BinanceClientModule } from '@clients'
import { redisConfig } from '@configs'
import { RateModule } from '@modules'

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: redisConfig.url,
      port: redisConfig.port,
      ttl: redisConfig.ttl,
      isGlobal: true,
    }),
    BinanceClientModule,
    RateModule,
  ],
})
export class AppModule {}

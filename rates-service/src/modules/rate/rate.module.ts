import { Module } from '@nestjs/common'
import { RateService } from './rate.service'
import { RateController } from './rate.controller'
import { BinanceClientModule } from '@clients'

@Module({
  imports: [BinanceClientModule],
  providers: [RateService],
  controllers: [RateController],
})
export class RateModule {}

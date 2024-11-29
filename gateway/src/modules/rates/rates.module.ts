import { Module } from '@nestjs/common'
import { RatesClientModule } from '@clients'
import { RatesController } from './rates.controller'

@Module({
  imports: [RatesClientModule],
  controllers: [RatesController],
})
export class RatesModule {}

import { Module } from '@nestjs/common'
import { RatesClientModule } from '@clients'
import { RatesModule, HealthModule, NotFoundModule } from '@modules'

@Module({
  imports: [RatesModule, RatesClientModule, HealthModule, NotFoundModule],
})
export class App {}

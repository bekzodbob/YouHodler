import { Module } from '@nestjs/common'
import { Transport, ClientsModule } from '@nestjs/microservices'
import { rmqConfig } from '@configs'
import { RatesClientService } from './rates-client.service'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RATES_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://${rmqConfig.username}:${rmqConfig.password}@${rmqConfig.host}:${rmqConfig.port}`],
          queue: 'rates-service',
        },
      },
    ]),
  ],
  exports: [RatesClientService],
  providers: [RatesClientService],
})
export class RatesClientModule {}

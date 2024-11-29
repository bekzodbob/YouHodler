import { Transport } from '@nestjs/microservices'
import { NestFactory } from '@nestjs/core'
import { redisConfig, rmqConfig } from '@configs'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${rmqConfig.username}:${rmqConfig.password}@${rmqConfig.host}:${rmqConfig.port}`],
      queue: rmqConfig.queue,
      noAck: rmqConfig.noAck,
    },
    queueOptions: {
      durable: false,
    },
  })

  await app.listen()
}

bootstrap()

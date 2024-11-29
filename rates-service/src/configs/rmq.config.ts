export declare interface RMQConfig {
  host: string
  port: number
  username: string
  password: string
  queue: string
  noAck: boolean
}

export const rmqConfig: RMQConfig = {
  host: process.env.RMQ_HOST ?? 'locahost',
  port: process.env.RMQ_PORT ? parseInt(process.env.RMQ_PORT, 10) : 5672,
  username: process.env.RMQ_USERNAME ?? 'guest',
  password: process.env.RMQ_PASSWORD ?? 'guest',
  queue: process.env.RMQ_QUEUE ?? 'rates-service',
  noAck: process.env.RMQ_NO_ACK === 'true',
}

export declare interface RMQConfig {
  host: string
  port: number
  username: string
  password: string
}

export const rmqConfig: RMQConfig = {
  host: process.env.RMQ_HOST ?? 'localhost',
  port: process.env.RMQ_PORT ? parseInt(process.env.RMQ_PORT, 10) : 5672,
  username: process.env.RMQ_USERNAME ?? 'guest',
  password: process.env.RMQ_PASSWORD ?? 'guest',
}

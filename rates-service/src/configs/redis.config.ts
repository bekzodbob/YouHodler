export declare interface RedisConfig {
  url: string
  port: number
  ttl: number
}

export const redisConfig: RedisConfig = {
  url: process.env.REDIS_HOST ?? 'localhost',
  port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : 6379,
  ttl: process.env.REDIS_TTL ? parseInt(process.env.REDIS_TTL, 10) : 60,
}

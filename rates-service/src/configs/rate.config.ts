export declare interface RateConfig {
  cacheTtl: number
  chachePrefix: string
}

export const rateConfig: RateConfig = {
  cacheTtl: process.env.RATE_CACHE_TTL ? parseInt(process.env.RATE_CACHE_TTL, 10) : 10000,
  chachePrefix: process.env.RATE_CACHE_PREFIX ?? 'rate-',
}

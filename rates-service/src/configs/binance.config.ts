export declare interface BinanceConfig {
  url: string
  timeout: number
}

export const binanceConfig: BinanceConfig = {
  url: process.env.BINANCE_URL ?? undefined,
  timeout: process.env.BINANCE_TIMEOUT ? parseInt(process.env.BINANCE_TIMEOUT, 10) : undefined,
}

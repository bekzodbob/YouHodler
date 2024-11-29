import type { GetRateByCodeRequest, GetRateByCodeResponse } from './interfaces'
import { Cache } from 'cache-manager'
import { Decimal } from 'decimal.js'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable, OnModuleInit } from '@nestjs/common'
import { BinanceClientService } from '@clients'
import { rateConfig } from '@configs'

@Injectable()
export class RateService implements OnModuleInit {
  readonly #_binanceClient: BinanceClientService

  constructor(binanceClient: BinanceClientService, @Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {
    this.#_binanceClient = binanceClient
  }

  async getRateByCode(payload: GetRateByCodeRequest): Promise<GetRateByCodeResponse> {
    const cached = await this.cacheManager.get<Promise<{ code: string; createdAt: number; data: Record<string, any> }>>(
      rateConfig.chachePrefix + payload.code,
    )

    if (cached && cached.createdAt > Date.now() - rateConfig.cacheTtl)
      return { bid: cached.data.bid, ask: cached.data.ask, mid: cached.data.mid, code: cached.code }

    const result = await this.#_binanceClient.getBookTicker({ symbol: payload.code })

    const midPrice = String(new Decimal(result.askPrice).plus(result.bidPrice).dividedBy(2))

    await this.cacheManager.set(rateConfig.chachePrefix + payload.code, {
      code: payload.code,
      createdAt: Date.now(),
      data: {
        bid: result.bidPrice,
        ask: result.askPrice,
        mid: midPrice,
      },
    })

    return {
      code: payload.code,
      bid: result.bidPrice,
      ask: result.askPrice,
      mid: midPrice,
    }
  }

  async onModuleInit() {
    await this.cacheManager.set('suchka', 'suchka')
  }
}

import type { GetBookTickerRequest, GetBookTickerResponse } from './interfaces'
import { firstValueFrom } from 'rxjs'
import { HttpService } from '@nestjs/axios'
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { HttpMethod } from './enums'

@Injectable()
export class BinanceClientService {
  readonly #_http: HttpService

  constructor(http: HttpService) {
    this.#_http = http
  }

  async getBookTicker(payload: GetBookTickerRequest): Promise<GetBookTickerResponse> {
    return this.#_request<GetBookTickerRequest, GetBookTickerResponse>({
      url: 'v3/ticker/bookTicker',
      method: HttpMethod.GET,
      params: {
        symbol: payload.symbol,
      },
    })
  }

  async #_request<TRequest = unknown, TResponse = unknown>(payload: {
    url: string
    method: string
    params: Record<string, unknown>
    data?: TRequest
  }): Promise<TResponse> {
    try {
      const { data } = await firstValueFrom(
        this.#_http.request<TResponse>({
          url: payload.url,
          method: payload.method,
          params: payload.params,
          data: payload.data,
        }),
      )

      return data
    } catch (error: unknown) {
      throw new InternalServerErrorException(error)
    }
  }
}

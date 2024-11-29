import type { GetRateByCodeRequest, GetRateByCodeResponse } from './interfaces'
import { lastValueFrom } from 'rxjs'
import { ClientProxy } from '@nestjs/microservices'
import { Inject, Injectable, OnModuleInit, InternalServerErrorException } from '@nestjs/common'
import { CMD } from './enums'

@Injectable()
export class RatesClientService implements OnModuleInit {
  constructor(@Inject('RATES_SERVICE') private readonly client: ClientProxy) {}

  getRateByCode(payload: GetRateByCodeRequest): Promise<GetRateByCodeResponse> {
    return lastValueFrom(
      this.client.send<GetRateByCodeResponse, GetRateByCodeRequest>(
        { cmd: CMD.RATES_SERVICE_RATE_GET_RATE_BY_CODE },
        payload,
      ),
    )
  }

  async onModuleInit() {
    try {
      await this.client.connect()
    } catch (error) {
      console.log('RATES_SERVICE_CONNECT_ERROR', error)
      throw new InternalServerErrorException(error)
    }
  }
}

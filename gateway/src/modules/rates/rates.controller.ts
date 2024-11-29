import type { GetRateByCodeResponse } from './interfaces'
import { RatesClientService } from '@clients'
import { Get, Query, Controller } from '@nestjs/common'
import { ApiTags, ApiQuery, ApiOkResponse } from '@nestjs/swagger'
import { GetRateByTypeResponseDto } from './dtos'

@ApiTags('Rates')
@Controller({
  path: 'rates',
  version: '1',
})
export class RatesController {
  readonly #_ratesClient: RatesClientService

  constructor(ratesClient: RatesClientService) {
    this.#_ratesClient = ratesClient
  }

  @Get('by-code')
  @ApiQuery({ name: 'code', required: true, example: 'LTCBTC' })
  @ApiOkResponse({ type: GetRateByTypeResponseDto })
  getRateByCode(@Query('code') code: string): Promise<GetRateByCodeResponse> {
    return this.#_ratesClient.getRateByCode({ code })
  }
}

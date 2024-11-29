import type { GetRateByCodeResponse } from './interfaces'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { Controller } from '@nestjs/common'
import { RateService } from './rate.service'
import { CMD } from './enums'
import { GetRateByCodeDto } from './dtos'

@Controller()
export class RateController {
  readonly #_service: RateService

  constructor(service: RateService) {
    this.#_service = service
  }

  @MessagePattern({ cmd: CMD.RATES_SERVICE_RATE_GET_RATE_BY_CODE })
  getRateByCode(@Payload() payload: GetRateByCodeDto): Promise<GetRateByCodeResponse> {
    return this.#_service.getRateByCode(payload)
  }
}

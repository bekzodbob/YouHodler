import type { GetRateByCodeResponse } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'

export class GetRateByTypeResponseDto implements GetRateByCodeResponse {
  @ApiProperty({ example: 'LTCBTC' })
  code: string

  @ApiProperty({ example: '0.000020' })
  bid: string

  @ApiProperty({ example: '0.000030' })
  ask: string

  @ApiProperty({ example: '0.000025' })
  mid: string
}

import type { GetRateByCodeRequest } from '../interfaces'
import { IsString, IsNotEmpty } from 'class-validator'

export class GetRateByCodeDto implements GetRateByCodeRequest {
  @IsNotEmpty()
  @IsString()
  code: string
}

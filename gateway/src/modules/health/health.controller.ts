import { Get, HttpCode, HttpStatus, Controller } from '@nestjs/common'
import { ApiExcludeController } from '@nestjs/swagger'

@Controller('health')
@ApiExcludeController()
export class HealthController {
  @Get('ping')
  @HttpCode(HttpStatus.OK)
  ping(): string {
    return 'pong'
  }
}

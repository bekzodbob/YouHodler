import { Options, HttpCode, HttpStatus, Controller } from '@nestjs/common'
import { ApiExcludeController } from '@nestjs/swagger'

@Controller()
@ApiExcludeController()
export class NotFoundController {
  @Options('*')
  @HttpCode(HttpStatus.NO_CONTENT)
  options(): void {
    //
  }
}

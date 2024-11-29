import { request } from 'http'
import { HttpStatus } from '@nestjs/common'
import { appConfig } from '@configs'

const client = request(
  {
    host: appConfig.host,
    port: appConfig.port,
    path: '/health/ping',
    method: 'GET',
    timeout: 5000,
  },
  ({ statusCode }): void => {
    if (statusCode === HttpStatus.OK) {
      process.exit(0)
    } else {
      process.exit(1)
    }
  },
)

client.on('error', (): void => {
  process.exit(1)
})

client.end()

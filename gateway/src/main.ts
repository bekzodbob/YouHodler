import type { NestExpressApplication } from '@nestjs/platform-express'
import { json } from 'express'
import { NestFactory } from '@nestjs/core'
import { VersioningType } from '@nestjs/common'
import { SwaggerModule } from '@nestjs/swagger'
import { ExpressAdapter } from '@nestjs/platform-express'
import { appConfig, swaggerConfig } from '@configs'
import { App } from './app'

setImmediate(async (): Promise<void> => {
  const app = await NestFactory.create<NestExpressApplication>(App, new ExpressAdapter(), {
    cors: {
      maxAge: 0,
      origin: ['*'],
      methods: ['*'],
      credentials: false,
      allowedHeaders: ['*'],
      exposedHeaders: [],
      preflightContinue: false,
      optionsSuccessStatus: 200,
    },
    // logger: false,
  })

  app.use(
    json({
      limit: '5mb',
    }),
  )

  app.set('env', appConfig.env)
  app.set('etag', 'strong')
  app.set('trust proxy', true)
  app.set('x-powered-by', false)

  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'api/v',
  })

  const document = SwaggerModule.createDocument(app, swaggerConfig)

  SwaggerModule.setup('/docs', app, document, {
    swaggerOptions: {
      defaultModelsExpandDepth: -1,
    },
  })

  await app.listen(appConfig.port, appConfig.host)
})

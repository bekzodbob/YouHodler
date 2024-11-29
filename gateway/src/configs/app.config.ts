export declare interface AppConfig {
  env?: string
  name?: string
  host?: string
  port?: number
}

export const appConfig: AppConfig = {
  env: process.env.NODE_ENV ?? 'development',
  name: process.env.APP_NAME ?? 'gateway',
  host: process.env.APP_HOST ?? 'localhost',
  port: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 3000,
}

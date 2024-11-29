export declare interface AppConfig {
  production: boolean
}

export const appConfig: AppConfig = {
  production: process.env.APP_PRODUCTION ? process.env.APP_PRODUCTION === 'true' : false,
}

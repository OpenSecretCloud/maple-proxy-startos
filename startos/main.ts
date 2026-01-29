import { sdk } from './sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {

  console.info(' ... Starting Maple Proxy ... ')

  const proxyEnv: {
    MAPLE_HOST: string,
    MAPLE_ENABLE_CORS: string,
    MAPLE_API_KEY?: string,
  } = {
    MAPLE_HOST: '0.0.0.0',
    MAPLE_ENABLE_CORS: 'true',
  }

  const apiKey = undefined // @TODO: store
  if (apiKey) {
    proxyEnv.MAPLE_API_KEY = apiKey
  }

  return sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer: await sdk.SubContainer.of(
      effects,
      { imageId: 'maple-proxy' },
      sdk.Mounts.of(),
      'proxy-sub',
    ),
    exec: {
      command: sdk.useEntrypoint(),
      env: proxyEnv
    },
    ready: {
      display: 'API',
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: 'OK',
          errorMessage: 'Error',
        }),
    },
    requires: [],
  })
})

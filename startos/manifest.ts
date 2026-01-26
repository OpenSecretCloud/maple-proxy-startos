import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'maple-proxy',
  title: 'Maple Proxy',
  license: 'MIT',
  wrapperRepo: 'https://github.com/Start9Labs/hello-world-startos',
  upstreamRepo: 'https://github.com/OpenSecretCloud/maple-proxy',
  supportSite: 'https://trymaple.ai',
  marketingSite: 'https://trymaple.ai',
  donationUrl: 'https://trymaple.ai',
  docsUrl:
    'https://github.com/Start9Labs/hello-world-startos/blob/master/instructions.md',
  description: {
    short: 'Bare bones example of a StartOS service',
    long: 'Hello World is a template service that provides examples of basic StartOS features.',
  },
  volumes: ['main'],
  images: {
    'maple-proxy': {
      source: {
        dockerTag: 'ghcr.io/opensecretcloud/maple-proxy:0.1.5'
      },
    },
  },
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})

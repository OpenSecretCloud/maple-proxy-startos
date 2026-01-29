import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'maple-proxy',
  title: 'Maple Proxy',
  license: 'MIT',
  wrapperRepo: 'https://github.com/OpenSecretCloud/maple-proxy-startos',
  upstreamRepo: 'https://github.com/OpenSecretCloud/maple-proxy',
  supportSite: 'https://trymaple.ai',
  marketingSite: 'https://trymaple.ai',
  donationUrl: null,
  docsUrl: 'https://blog.trymaple.ai/maple-proxy-documentation/',
  description: {
    short: 'Local API proxy for encrypted, privacy-preserving AI services',
    long: 'Maple Proxy provides a local API proxy for encrypted, privacy-preserving AI services.',
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

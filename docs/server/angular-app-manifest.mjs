
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/algostyle/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 733, hash: '5563498a6f8e38e987445b2115eb037177e8e5b144964d0b375d232b196e6275', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: 'b14fc8cc3a67d458837ed9ddc8315e9114105e898bd617e4954ed41c2cfbe990', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-2DMH6FHK.css': {size: 604, hash: 'QExDXTvgwDs', text: () => import('./assets-chunks/styles-2DMH6FHK_css.mjs').then(m => m.default)}
  },
};

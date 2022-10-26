module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      headers: '*',
      header: '*', // Deprecated
      enabled: true,
      origin: [
        'http://localhost:8000',
        'https://endearing-pony-6b8b82.netlify.app/',
        'http://localhost:1337',
      ],
    },
  },
];

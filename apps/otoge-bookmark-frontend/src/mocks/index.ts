if (typeof window === 'undefined') {
  // eslint-disable-next-line global-require,@typescript-eslint/no-var-requires
  const { server } = require('./server');
  server.listen({ onUnhandledRequest: 'bypass' });
} else {
  // eslint-disable-next-line global-require,@typescript-eslint/no-var-requires
  const { worker } = require('./browser');
  worker.start({ onUnhandledRequest: 'bypass' });
}

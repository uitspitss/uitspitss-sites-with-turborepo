import { server } from './server';
import { worker } from './browser';

if (typeof window === 'undefined') {
  server.listen({ onUnhandledRequest: 'bypass' });
} else {
  worker.start({ onUnhandledRequest: 'bypass' });
}

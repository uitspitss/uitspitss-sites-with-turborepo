import { worker } from './browser';
import { server } from './server';

if (typeof window === 'undefined') {
  server.listen({ onUnhandledRequest: 'bypass' });
} else {
  worker.start({ onUnhandledRequest: 'bypass' });
}

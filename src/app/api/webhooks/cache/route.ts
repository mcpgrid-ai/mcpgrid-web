import { strapi } from '@network/strapi';

export async function POST() {
  strapi.client.cache.reset();

  return new Response('Ok', {
    status: 200,
  });
}

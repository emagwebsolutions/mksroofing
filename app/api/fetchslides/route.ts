import { groq } from 'next-sanity';
import config from '@/sanity/client.config';

export async function GET(req: Request) {
  try {
    const res = await config.fetch(groq`
      *[_type == 'slider']{
      'url': image.asset->url
      }
    `);
    return new Response(JSON.stringify(res));
  } catch (err) {
    console.log(err);
  }
}

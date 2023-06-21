import { groq } from 'next-sanity';
import config from '@/sanity/client.config';

export async function GET(req: Request) {
  try {
    const res = await config.fetch(groq`
    *[_type == 'post']{
      title,
      'slug': slug.current,
      'image': mainImage.asset->url,
      body,
      excerpt,
      'cat':   categories[0] -> title  
    }
    `);
    return new Response(JSON.stringify(res));
  } catch (err) {
    console.log(err);
  }
}

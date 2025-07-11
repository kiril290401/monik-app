import { client } from './sanityClient';
import { galleryQuery, homePhotosQuery, servicesQuery } from './queries';

export async function getHomePhotos() {
  const photos = await client.fetch(homePhotosQuery);
  return photos;
}

export async function getGalleryPhotos() {
  const photos = await client.fetch(galleryQuery);
  return photos;
}

export async function getServices() {
  const photos = await client.fetch(servicesQuery);
  return photos;
}


export async function getServiceBySlug(slug: string) {
  const query = `*[_type == "service" && slug.current == $slug][0]{
    _id,
    title,
    description {
      small,
      large
    },
    "imageUrl": image.asset->url,
    "slug": slug.current
  }`;
  return await client.fetch(query, { slug });
}
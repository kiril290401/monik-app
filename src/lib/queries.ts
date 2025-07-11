export const homePhotosQuery = `
  *[_type == "photo" && showOnHome == true]{
    _id,
    alt,
    "imageUrl": image.asset->url
  }
`;

export const galleryQuery = `
  *[_type == "photo"]{
    _id,
    alt,
    "imageUrl": image.asset->url
  }
`;

export const servicesQuery = `
  *[_type == "service"]{
    _id,
    title,
    description {
      small,
      large
    },
    "slug": slug.current,
    "imageUrl": image.asset->url
  }
`;

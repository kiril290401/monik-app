export type PhotoType = {
  _id: string;
  alt: string;
  imageUrl: string;
};

export type ServiceType = {
  _id: string;
  title: string;
  description: {
    small: string;
    large: string;
  };
  slug: string;
  imageUrl: string;

};



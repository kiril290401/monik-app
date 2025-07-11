export default {
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'showOnHome',
      title: 'Show in main page',
      type: 'boolean',
    },
  ],
};

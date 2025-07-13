import { defineType } from 'sanity';

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'blogLink',
      title: 'Blog Link',
      type: 'url',
    },
    {
      name: 'coverPhoto',
      title: 'Blog Cover Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}); 
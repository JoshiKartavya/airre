import { defineType } from 'sanity';

export default defineType({
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'coverPhoto',
      title: 'Cover Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'about',
      title: 'About',
      type: 'text',
    },
    {
      name: 'twitter',
      title: 'Twitter Handle Link',
      type: 'url',
    },
    {
      name: 'instagram',
      title: 'Instagram Link',
      type: 'url',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn Link',
      type: 'url',
    },
    {
      name: 'portfolio',
      title: 'Portfolio Link',
      type: 'url',
    },
    {
      name: 'youtube',
      title: 'YouTube Link',
      type: 'url',
    },
    {
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
  ],
}); 
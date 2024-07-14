// schemas/video.js
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'video',
  type: 'document',
  title: 'Video',
  fields: [
    defineField({
      name: 'title',
      type: 'object',
      title: 'Title',
      fields: [
        defineField({
          name: 'en',
          type: 'string',
          title: 'English Title',
          optional: true,
        }),
        defineField({
          name: 'ne',
          type: 'string',
          title: 'Nepali Title',
          optional: true,
        }),
      ],
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube URL',
    }),
  ],
});

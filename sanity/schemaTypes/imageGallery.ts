// schemas/imageGroup.js
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'imageGroup',
  type: 'document',
  title: 'Image Group',
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
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          type: 'image',
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
          ],
        },
      ],
    }),
  ],
});
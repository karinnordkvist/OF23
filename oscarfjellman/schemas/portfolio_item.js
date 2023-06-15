import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolio_item',
  title: 'Portfolio Item',
  type: 'document',
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'dropshadow',
      title: 'Drop shadow?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    prepare({title}) {
      return {
        title: title,
      }
    },
  },
})

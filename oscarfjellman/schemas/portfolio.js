import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'portfolio_items',
      title: 'Portfolio Items',
      type: 'array',
      of: [{type: 'reference', to: {type: 'portfolio_item'}}],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Portfolio',
      }
    },
  },
})

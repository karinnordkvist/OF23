import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cv',
  title: 'Cv',
  type: 'document',
  fields: [
    defineField({
      name: 'cv_text',
      title: 'CV Text',
      type: 'blockContent',
    }),
    defineField({
      name: 'cv_text_2',
      title: 'CV Text - Kolumn 2',
      type: 'blockContent',
    }),
    defineField({
      name: 'cv_text_3',
      title: 'CV Text - Kolumn 3',
      type: 'blockContent',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Cv',
      }
    },
  },
})

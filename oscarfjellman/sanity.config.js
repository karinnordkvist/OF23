import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {createClient} from '@sanity/client'

export default defineConfig({
  name: 'default',
  title: 'OscarFjellman',

  projectId: '68o5widz',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Base')
          .items([
            S.listItem()
              .title('Portfolio')
              .child(S.document().schemaType('portfolio').documentId('portfolio')),
            S.listItem().title('CV').child(S.document().schemaType('cv').documentId('cv')),
            S.listItem().title('About').child(S.document().schemaType('about').documentId('about')),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !['portfolio', 'portfolio_item', 'cv', 'about'].includes(listItem.getId())
            ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})

export const client = createClient({
  projectId: '68o5widz',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

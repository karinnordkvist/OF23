/* eslint-disable */
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Sidor')
    .items([
      S.listItem()
        .title('Portfolio')
        .child(S.document().schemaType('portfolio').documentId('portfolio')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['portfolio_item'].includes(listItem.getId())
      ),
    ])

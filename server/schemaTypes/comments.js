import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comments',
  title: 'comments',
  type: 'document',
  fields: [
    defineField({
      name: 'comment',
      title: 'comment',
      type: 'string',
    }),
    defineField({
      name: 'users',
      title: 'users',
      type: 'reference',
      to : {type:'users'}
    }),
    
],
})
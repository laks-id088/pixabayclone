import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'users',
  title: 'users',
  type: 'document',
  fields: [
    defineField({
      name: 'displayname',
      title: 'name',
      type: 'string',
    }),
    defineField({
      name: 'uid',
      title: 'userid',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'email',
      type: 'string',
      
    }),
    defineField({
      name: 'phonenumber',
      title: 'contact',
      type: 'string',
      
    }),
    defineField({
      name: 'photourl',
      title: 'image',
      type: 'string',
      
    }),
],
})
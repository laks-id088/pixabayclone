import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'keywords',
      title: 'tags',
      type: 'array',
      of : [
        {type: 'string'}
    ]
    }),
    defineField({
      name: 'description',
      title: 'description',
      type: 'string',
      
    }),
    defineField({
      name: 'filesource',
      title: 'filetype',
      type: 'string',
      options: {
        list: [
          {title:'Image', value:'image'},
          {title:'Image', value:'others'},
        ],
        layout : 'radio'
      }
      
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
        
      },
      hidden : ({parent}) => parent?.filesource !== 'image'
    }),
    defineField({
      name: 'otherMedia',
      title: 'other Media',
      type: 'file',
      hidden : ({parent}) => parent?.filesource === 'image'
      
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'string',
      
    }),
    defineField({
      name: 'users',
      title: 'users',
      type: 'reference',
      to : {type:'users'} 
      
    }),
    defineField({
      name: 'comments',
      title: 'comments',
      type: 'array',
      
        of: [
          {type:'reference', to:[{type:'comments'}]},
         
        ]
      }),
      defineField({
        name: 'collections',
        title: 'collections',
        type: 'array',
        
          of: [
            {type:'reference', to:[{type:'users'}]},
           
          ]
        }),
      ],
    })

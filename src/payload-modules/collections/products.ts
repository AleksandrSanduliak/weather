import type { CollectionConfig } from 'payload';

export const ProductsCollection: CollectionConfig = {
  slug: 'products',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'price', type: 'number', required: true },
    { name: 'brand', type: 'relationship', relationTo: 'brands', required: true },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      required: true,
    },
    {
      name: 'variants',
      type: 'array',
      fields: [
        {
          name: 'preview',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Main Product Thumbnail',
        },
        {
          name: 'images',
          type: 'array',
          label: 'Product Images',
          minRows: 1,
          labels: {
            singular: 'Image',
            plural: 'Images',
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'caption',
              type: 'text',
            },
          ],
        },
        {
          name: 'sku',
          type: 'text',
          unique: true,
          admin: {
            position: 'sidebar',
            description: 'Auto-generated if left blank.',
          },
        },
        {
          name: 'color',
          type: 'text',
        },
        {
          name: 'sizes',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'size',
              type: 'text',
              required: true,
            },
            {
              name: 'price',
              type: 'number',
              required: true,
            },

            {
              name: 'count',
              type: 'number',
              required: true,
              min: 0,
              defaultValue: 0,
            },
          ],
        },
      ],
    },
  ],
};

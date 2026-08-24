import { CollectionConfig } from 'payload';

export const CategoriesCollection: CollectionConfig = {
  slug: 'categories',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
  ],
};

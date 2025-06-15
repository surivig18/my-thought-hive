import { CollectionConfig } from 'payload';
import { slugField } from '../fields/slug';

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'description', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
      maxLength: 50,
    },
    {
      name: 'description',
      type: 'textarea',
      maxLength: 200,
    },
    {
      name: 'color',
      type: 'text',
      admin: {
        description: 'Hex color code for category badge (e.g., #3B82F6)',
      },
      defaultValue: '#64748B',
    },
    slugField(),
  ],
  timestamps: true,
};
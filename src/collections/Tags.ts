import { CollectionConfig } from 'payload/types';
import { slugField } from '../fields/slug';

export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'updatedAt'],
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
      maxLength: 30,
    },
    slugField(),
  ],
  timestamps: true,
};
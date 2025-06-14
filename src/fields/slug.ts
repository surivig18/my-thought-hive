import { Field } from 'payload/types';
import { formatSlug } from '../utils/formatSlug';

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field;

export const slugField: Slug = (fieldToUse = 'title', overrides = {}) => ({
  name: 'slug',
  label: 'Slug',
  type: 'text',
  index: true,
  admin: {
    position: 'sidebar',
    description: 'URL-friendly version of the title',
  },
  hooks: {
    beforeValidate: [
      formatSlug(fieldToUse),
    ],
  },
  ...overrides,
});
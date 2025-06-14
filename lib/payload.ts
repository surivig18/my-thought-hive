import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '../payload.config';

export const getPayload = async () => {
  const payload = await getPayloadHMR({ config: configPromise });
  return payload;
};

// Helper functions for common operations
export const getPosts = async (options?: {
  limit?: number;
  where?: any;
  sort?: string;
}) => {
  const payload = await getPayload();
  
  const posts = await payload.find({
    collection: 'posts',
    limit: options?.limit || 10,
    where: {
      status: { equals: 'published' },
      ...options?.where,
    },
    sort: options?.sort || '-publishedAt',
    populate: ['author', 'categories', 'tags', 'featuredImage'],
  });
  
  return posts;
};

export const getPostBySlug = async (slug: string) => {
  const payload = await getPayload();
  
  const posts = await payload.find({
    collection: 'posts',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
    populate: ['author', 'categories', 'tags', 'featuredImage'],
  });
  
  return posts.docs[0] || null;
};

export const getCategories = async () => {
  const payload = await getPayload();
  
  const categories = await payload.find({
    collection: 'categories',
    sort: 'name',
  });
  
  return categories;
};

export const getTags = async () => {
  const payload = await getPayload();
  
  const tags = await payload.find({
    collection: 'tags',
    sort: 'name',
  });
  
  return tags;
};
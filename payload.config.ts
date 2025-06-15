import { buildConfig } from 'payload';
import { slateEditor } from '@payloadcms/richtext-slate';
import  {postgresAdapter}  from '@payloadcms/db-postgres'
import path from 'path';


export default buildConfig({
  secret: process.env.PAYLOAD_SECRET ?? "",
  admin: {
    user: "",
    meta: {
      titleSuffix: '- Blog Admin',
    },
  },
  editor: slateEditor({}),
  
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  // plugins: [
  //   seoPlugin({
  //     collections: ['posts'],
  //     uploadsCollection: 'media',
  //     generateTitle: ({ doc }) => `Blog - ${doc.title}`,
  //     generateDescription: ({ doc }) => doc.excerpt,
  //   }),
  // ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  cors: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  ].filter(Boolean),
  csrf: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  ].filter(Boolean),
});
import { buildConfig } from 'payload';
import  {postgresAdapter}  from '@payloadcms/db-postgres'


export default buildConfig({
  secret: process.env.PAYLOAD_SECRET ?? "",
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
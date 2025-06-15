import { RootPage } from '@payloadcms/next/views';
import config from '../../../payload.config'
import {importMap} from '../importMap'
type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}


const AdminPage = ({ params, searchParams }: Args) => {
  RootPage({ config, params, searchParams,importMap })
};

export default AdminPage;
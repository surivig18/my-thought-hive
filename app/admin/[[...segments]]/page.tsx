import { AdminView } from '@payloadcms/next/views';
import configPromise from '../../../payload.config';

const AdminPage = ({ params }: { params: { segments: string[] } }) => {
  return <AdminView config={configPromise} />;
};

export default AdminPage;
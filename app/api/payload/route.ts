import { NextRequest } from 'next/server';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '../../../payload.config';

export const GET = async (req: NextRequest) => {
  const payload = await getPayloadHMR({ config: configPromise });
  
  // Handle Payload admin routes
  return payload.handler(req);
};

export const POST = async (req: NextRequest) => {
  const payload = await getPayloadHMR({ config: configPromise });
  
  return payload.handler(req);
};

export const PUT = async (req: NextRequest) => {
  const payload = await getPayloadHMR({ config: configPromise });
  
  return payload.handler(req);
};

export const DELETE = async (req: NextRequest) => {
  const payload = await getPayloadHMR({ config: configPromise });
  
  return payload.handler(req);
};

export const PATCH = async (req: NextRequest) => {
  const payload = await getPayloadHMR({ config: configPromise });
  
  return payload.handler(req);
};
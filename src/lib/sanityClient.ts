import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,      // <- remplaza con el ID real
  dataset: 'production',
  apiVersion: '2023-07-01',        // <- usa una fecha actual o fija
  useCdn: true,                    // true para producción (más rápido, no actualiza en tiempo real)
});

import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: '78wmuhaw',      // <- remplaza con el ID real
  dataset: 'production',
  apiVersion: '2023-07-01',        // <- usa una fecha actual o fija
  useCdn: false,                    // true para producción (más rápido, no actualiza en tiempo real)
});

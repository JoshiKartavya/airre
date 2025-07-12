import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: '5suhp30q',
  dataset: 'production',
  apiVersion: '2025-07-12', // Use today's date for latest API
  useCdn: false, // Set to true for public, false for fresh data
  token: 'skLOqUs2k7x5OZsW96AGix62lN3yXCyo9uCucraNxfSL92uedxIkf8tSFDt7y7B2MG4lETbHIIjUvkBAILBVRop3pKL6VbJxhvEDbCZnvUnFvoygPfPToLvT40By9P1Z7nNPaW20qGshjaZdV09ScYfBNRCJJ5tbrlzjveDk6XGeZoEj2L2R',
}); 
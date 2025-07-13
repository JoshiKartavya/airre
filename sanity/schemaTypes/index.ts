import { type SchemaTypeDefinition } from 'sanity'
import blog from './blog'
import member from './member'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, member],
}

// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Incident } = initSchema(schema);

export {
  Incident
};
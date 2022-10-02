// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SocialPostProf } = initSchema(schema);

export {
  SocialPostProf
};
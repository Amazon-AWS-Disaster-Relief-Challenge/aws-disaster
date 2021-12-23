// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostType = {
  "TEXT": "TEXT",
  "PHOTO": "PHOTO",
  "VIDEO": "VIDEO",
  "AUDIO": "AUDIO"
};

const IncidentType = {
  "FIRE": "FIRE",
  "EARTHQUAKE": "EARTHQUAKE",
  "FLOOD": "FLOOD",
  "TORNADO": "TORNADO",
  "HURRICANE": "HURRICANE"
};

const { Post, Incident } = initSchema(schema);

export {
  Post,
  Incident,
  PostType,
  IncidentType
};
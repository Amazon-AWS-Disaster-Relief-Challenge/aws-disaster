// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostType = {
  "TEXT": "TEXT",
  "PHOTO": "PHOTO",
  "VIDEO": "VIDEO",
  "AUDIO": "AUDIO"
};

const PostStatus = {
  "DRAFT": "DRAFT",
  "PUBLISHED": "PUBLISHED",
  "REMOVED": "REMOVED"
};

const IncidentType = {
  "FIRE": "FIRE",
  "EARTHQUAKE": "EARTHQUAKE",
  "FLOOD": "FLOOD",
  "TORNADO": "TORNADO",
  "HURRICANE": "HURRICANE"
};

const { Comment, Post, Incident } = initSchema(schema);

export {
  Comment,
  Post,
  Incident,
  PostType,
  PostStatus,
  IncidentType
};
// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const IncidentType = {
  "FIRE": "FIRE",
  "EARTHQUAKE": "EARTHQUAKE",
  "FLOOD": "FLOOD",
  "TORNADO": "TORNADO",
  "HURRICANE": "HURRICANE"
};

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

const { IncidentTags, Incident, Post, Comment, IncidentTagsPost } = initSchema(schema);

export {
  IncidentTags,
  Incident,
  Post,
  Comment,
  IncidentTagsPost,
  IncidentType,
  PostType,
  PostStatus
};
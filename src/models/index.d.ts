import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum PostType {
  TEXT = "TEXT",
  PHOTO = "PHOTO",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO"
}

export enum PostStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  REMOVED = "REMOVED"
}

export enum IncidentType {
  FIRE = "FIRE",
  EARTHQUAKE = "EARTHQUAKE",
  FLOOD = "FLOOD",
  TORNADO = "TORNADO",
  HURRICANE = "HURRICANE"
}



type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type IncidentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Comment {
  readonly id: string;
  readonly text?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class Post {
  readonly id: string;
  readonly title?: string;
  readonly type?: PostType | keyof typeof PostType;
  readonly likes?: number;
  readonly status?: PostStatus | keyof typeof PostStatus;
  readonly email?: string;
  readonly username?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Incident {
  readonly id: string;
  readonly title?: string;
  readonly longitude?: string;
  readonly latitude?: string;
  readonly type?: IncidentType | keyof typeof IncidentType;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Incident, IncidentMetaData>);
  static copyOf(source: Incident, mutator: (draft: MutableModel<Incident, IncidentMetaData>) => MutableModel<Incident, IncidentMetaData> | void): Incident;
}
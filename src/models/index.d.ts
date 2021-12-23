import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum PostType {
  TEXT = "TEXT",
  PHOTO = "PHOTO",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO"
}

export enum IncidentType {
  FIRE = "FIRE",
  EARTHQUAKE = "EARTHQUAKE",
  FLOOD = "FLOOD",
  TORNADO = "TORNADO",
  HURRICANE = "HURRICANE"
}



type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type IncidentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Post {
  readonly id: string;
  readonly title?: string;
  readonly type?: PostType | keyof typeof PostType;
  readonly author?: string;
  readonly likes?: number;
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
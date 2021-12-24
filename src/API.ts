/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCommentInput = {
  id?: string | null,
  text?: string | null,
  _version?: number | null,
};

export type ModelCommentConditionInput = {
  text?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  text?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCommentInput = {
  id: string,
  text?: string | null,
  _version?: number | null,
};

export type DeleteCommentInput = {
  id: string,
  _version?: number | null,
};

export type CreatePostInput = {
  id?: string | null,
  title?: string | null,
  type?: PostType | null,
  likes?: number | null,
  status?: PostStatus | null,
  email?: string | null,
  username?: string | null,
  _version?: number | null,
};

export enum PostType {
  TEXT = "TEXT",
  PHOTO = "PHOTO",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO",
}


export enum PostStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  REMOVED = "REMOVED",
}


export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  type?: ModelPostTypeInput | null,
  likes?: ModelIntInput | null,
  status?: ModelPostStatusInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelPostTypeInput = {
  eq?: PostType | null,
  ne?: PostType | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelPostStatusInput = {
  eq?: PostStatus | null,
  ne?: PostStatus | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title?: string | null,
  type?: PostType | null,
  likes?: number | null,
  status?: PostStatus | null,
  email?: string | null,
  username?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  type?: PostType | null,
  likes?: number | null,
  status?: PostStatus | null,
  email?: string | null,
  username?: string | null,
  _version?: number | null,
};

export type DeletePostInput = {
  id: string,
  _version?: number | null,
};

export type CreateIncidentInput = {
  id?: string | null,
  title?: string | null,
  longitude?: string | null,
  latitude?: string | null,
  type?: IncidentType | null,
  _version?: number | null,
};

export enum IncidentType {
  FIRE = "FIRE",
  EARTHQUAKE = "EARTHQUAKE",
  FLOOD = "FLOOD",
  TORNADO = "TORNADO",
  HURRICANE = "HURRICANE",
}


export type ModelIncidentConditionInput = {
  title?: ModelStringInput | null,
  longitude?: ModelStringInput | null,
  latitude?: ModelStringInput | null,
  type?: ModelIncidentTypeInput | null,
  and?: Array< ModelIncidentConditionInput | null > | null,
  or?: Array< ModelIncidentConditionInput | null > | null,
  not?: ModelIncidentConditionInput | null,
};

export type ModelIncidentTypeInput = {
  eq?: IncidentType | null,
  ne?: IncidentType | null,
};

export type Incident = {
  __typename: "Incident",
  id: string,
  title?: string | null,
  longitude?: string | null,
  latitude?: string | null,
  type?: IncidentType | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateIncidentInput = {
  id: string,
  title?: string | null,
  longitude?: string | null,
  latitude?: string | null,
  type?: IncidentType | null,
  _version?: number | null,
};

export type DeleteIncidentInput = {
  id: string,
  _version?: number | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  type?: ModelPostTypeInput | null,
  likes?: ModelIntInput | null,
  status?: ModelPostStatusInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelIncidentFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  longitude?: ModelStringInput | null,
  latitude?: ModelStringInput | null,
  type?: ModelIncidentTypeInput | null,
  and?: Array< ModelIncidentFilterInput | null > | null,
  or?: Array< ModelIncidentFilterInput | null > | null,
  not?: ModelIncidentFilterInput | null,
};

export type ModelIncidentConnection = {
  __typename: "ModelIncidentConnection",
  items:  Array<Incident | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title?: string | null,
    type?: PostType | null,
    likes?: number | null,
    status?: PostStatus | null,
    email?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title?: string | null,
    type?: PostType | null,
    likes?: number | null,
    status?: PostStatus | null,
    email?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title?: string | null,
    type?: PostType | null,
    likes?: number | null,
    status?: PostStatus | null,
    email?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateIncidentMutationVariables = {
  input: CreateIncidentInput,
  condition?: ModelIncidentConditionInput | null,
};

export type CreateIncidentMutation = {
  createIncident?:  {
    __typename: "Incident",
    id: string,
    title?: string | null,
    longitude?: string | null,
    latitude?: string | null,
    type?: IncidentType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateIncidentMutationVariables = {
  input: UpdateIncidentInput,
  condition?: ModelIncidentConditionInput | null,
};

export type UpdateIncidentMutation = {
  updateIncident?:  {
    __typename: "Incident",
    id: string,
    title?: string | null,
    longitude?: string | null,
    latitude?: string | null,
    type?: IncidentType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteIncidentMutationVariables = {
  input: DeleteIncidentInput,
  condition?: ModelIncidentConditionInput | null,
};

export type DeleteIncidentMutation = {
  deleteIncident?:  {
    __typename: "Incident",
    id: string,
    title?: string | null,
    longitude?: string | null,
    latitude?: string | null,
    type?: IncidentType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCommentsQuery = {
  syncComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title?: string | null,
    type?: PostType | null,
    likes?: number | null,
    status?: PostStatus | null,
    email?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title?: string | null,
      type?: PostType | null,
      likes?: number | null,
      status?: PostStatus | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostsQuery = {
  syncPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title?: string | null,
      type?: PostType | null,
      likes?: number | null,
      status?: PostStatus | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetIncidentQueryVariables = {
  id: string,
};

export type GetIncidentQuery = {
  getIncident?:  {
    __typename: "Incident",
    id: string,
    title?: string | null,
    longitude?: string | null,
    latitude?: string | null,
    type?: IncidentType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListIncidentsQueryVariables = {
  filter?: ModelIncidentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIncidentsQuery = {
  listIncidents?:  {
    __typename: "ModelIncidentConnection",
    items:  Array< {
      __typename: "Incident",
      id: string,
      title?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: IncidentType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncIncidentsQueryVariables = {
  filter?: ModelIncidentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncIncidentsQuery = {
  syncIncidents?:  {
    __typename: "ModelIncidentConnection",
    items:  Array< {
      __typename: "Incident",
      id: string,
      title?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: IncidentType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title?: string | null,
    type?: PostType | null,
    likes?: number | null,
    status?: PostStatus | null,
    email?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title?: string | null,
    type?: PostType | null,
    likes?: number | null,
    status?: PostStatus | null,
    email?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title?: string | null,
    type?: PostType | null,
    likes?: number | null,
    status?: PostStatus | null,
    email?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateIncidentSubscription = {
  onCreateIncident?:  {
    __typename: "Incident",
    id: string,
    title?: string | null,
    longitude?: string | null,
    latitude?: string | null,
    type?: IncidentType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateIncidentSubscription = {
  onUpdateIncident?:  {
    __typename: "Incident",
    id: string,
    title?: string | null,
    longitude?: string | null,
    latitude?: string | null,
    type?: IncidentType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteIncidentSubscription = {
  onDeleteIncident?:  {
    __typename: "Incident",
    id: string,
    title?: string | null,
    longitude?: string | null,
    latitude?: string | null,
    type?: IncidentType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

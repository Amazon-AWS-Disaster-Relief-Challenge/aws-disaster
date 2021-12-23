/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateIncidentInput = {
  id?: string | null,
  title?: string | null,
  createAt?: number | null,
  lastModified?: number | null,
  _version?: number | null,
};

export type ModelIncidentConditionInput = {
  title?: ModelStringInput | null,
  createAt?: ModelIntInput | null,
  lastModified?: ModelIntInput | null,
  and?: Array< ModelIncidentConditionInput | null > | null,
  or?: Array< ModelIncidentConditionInput | null > | null,
  not?: ModelIncidentConditionInput | null,
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

export type Incident = {
  __typename: "Incident",
  id: string,
  title?: string | null,
  createAt?: number | null,
  lastModified?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateIncidentInput = {
  id: string,
  title?: string | null,
  createAt?: number | null,
  lastModified?: number | null,
  _version?: number | null,
};

export type DeleteIncidentInput = {
  id: string,
  _version?: number | null,
};

export type ModelIncidentFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  createAt?: ModelIntInput | null,
  lastModified?: ModelIntInput | null,
  and?: Array< ModelIncidentFilterInput | null > | null,
  or?: Array< ModelIncidentFilterInput | null > | null,
  not?: ModelIncidentFilterInput | null,
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

export type ModelIncidentConnection = {
  __typename: "ModelIncidentConnection",
  items:  Array<Incident | null >,
  nextToken?: string | null,
  startedAt?: number | null,
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
    createAt?: number | null,
    lastModified?: number | null,
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
    createAt?: number | null,
    lastModified?: number | null,
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
    createAt?: number | null,
    lastModified?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    createAt?: number | null,
    lastModified?: number | null,
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
      createAt?: number | null,
      lastModified?: number | null,
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
      createAt?: number | null,
      lastModified?: number | null,
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

export type OnCreateIncidentSubscription = {
  onCreateIncident?:  {
    __typename: "Incident",
    id: string,
    title?: string | null,
    createAt?: number | null,
    lastModified?: number | null,
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
    createAt?: number | null,
    lastModified?: number | null,
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
    createAt?: number | null,
    lastModified?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

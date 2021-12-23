import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type IncidentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Incident {
  readonly id: string;
  readonly title?: string;
  readonly createAt?: number;
  readonly lastModified?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Incident, IncidentMetaData>);
  static copyOf(source: Incident, mutator: (draft: MutableModel<Incident, IncidentMetaData>) => MutableModel<Incident, IncidentMetaData> | void): Incident;
}
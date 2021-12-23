/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIncident = /* GraphQL */ `
  mutation CreateIncident(
    $input: CreateIncidentInput!
    $condition: ModelIncidentConditionInput
  ) {
    createIncident(input: $input, condition: $condition) {
      id
      title
      createAt
      lastModified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateIncident = /* GraphQL */ `
  mutation UpdateIncident(
    $input: UpdateIncidentInput!
    $condition: ModelIncidentConditionInput
  ) {
    updateIncident(input: $input, condition: $condition) {
      id
      title
      createAt
      lastModified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteIncident = /* GraphQL */ `
  mutation DeleteIncident(
    $input: DeleteIncidentInput!
    $condition: ModelIncidentConditionInput
  ) {
    deleteIncident(input: $input, condition: $condition) {
      id
      title
      createAt
      lastModified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

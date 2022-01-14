/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUscisCase = /* GraphQL */ `
  subscription OnCreateUscisCase($owner: String) {
    onCreateUscisCase(owner: $owner) {
      id
      caseid
      casetype
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUscisCase = /* GraphQL */ `
  subscription OnUpdateUscisCase($owner: String) {
    onUpdateUscisCase(owner: $owner) {
      id
      caseid
      casetype
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUscisCase = /* GraphQL */ `
  subscription OnDeleteUscisCase($owner: String) {
    onDeleteUscisCase(owner: $owner) {
      id
      caseid
      casetype
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateUscisStatus = /* GraphQL */ `
  subscription OnCreateUscisStatus {
    onCreateUscisStatus {
      caseid
      laststatus
      history
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUscisStatus = /* GraphQL */ `
  subscription OnUpdateUscisStatus {
    onUpdateUscisStatus {
      caseid
      laststatus
      history
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUscisStatus = /* GraphQL */ `
  subscription OnDeleteUscisStatus {
    onDeleteUscisStatus {
      caseid
      laststatus
      history
      createdAt
      updatedAt
    }
  }
`;

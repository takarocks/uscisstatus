/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($username: String) {
    onCreateUser(username: $username) {
      id
      username
      email
      case {
        items {
          id
          caseid
          casetype
          email
          createdAt
          updatedAt
          userCaseId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($username: String) {
    onUpdateUser(username: $username) {
      id
      username
      email
      case {
        items {
          id
          caseid
          casetype
          email
          createdAt
          updatedAt
          userCaseId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($username: String) {
    onDeleteUser(username: $username) {
      id
      username
      email
      case {
        items {
          id
          caseid
          casetype
          email
          createdAt
          updatedAt
          userCaseId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUscisCase = /* GraphQL */ `
  subscription OnCreateUscisCase($owner: String) {
    onCreateUscisCase(owner: $owner) {
      id
      caseid
      casetype
      email
      createdAt
      updatedAt
      userCaseId
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
      userCaseId
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
      userCaseId
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

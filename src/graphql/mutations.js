/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUscisCase = /* GraphQL */ `
  mutation CreateUscisCase(
    $input: CreateUscisCaseInput!
    $condition: ModelUscisCaseConditionInput
  ) {
    createUscisCase(input: $input, condition: $condition) {
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
export const updateUscisCase = /* GraphQL */ `
  mutation UpdateUscisCase(
    $input: UpdateUscisCaseInput!
    $condition: ModelUscisCaseConditionInput
  ) {
    updateUscisCase(input: $input, condition: $condition) {
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
export const deleteUscisCase = /* GraphQL */ `
  mutation DeleteUscisCase(
    $input: DeleteUscisCaseInput!
    $condition: ModelUscisCaseConditionInput
  ) {
    deleteUscisCase(input: $input, condition: $condition) {
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
export const createUscisStatus = /* GraphQL */ `
  mutation CreateUscisStatus(
    $input: CreateUscisStatusInput!
    $condition: ModelUscisStatusConditionInput
  ) {
    createUscisStatus(input: $input, condition: $condition) {
      caseid
      laststatus
      history
      createdAt
      updatedAt
    }
  }
`;
export const updateUscisStatus = /* GraphQL */ `
  mutation UpdateUscisStatus(
    $input: UpdateUscisStatusInput!
    $condition: ModelUscisStatusConditionInput
  ) {
    updateUscisStatus(input: $input, condition: $condition) {
      caseid
      laststatus
      history
      createdAt
      updatedAt
    }
  }
`;
export const deleteUscisStatus = /* GraphQL */ `
  mutation DeleteUscisStatus(
    $input: DeleteUscisStatusInput!
    $condition: ModelUscisStatusConditionInput
  ) {
    deleteUscisStatus(input: $input, condition: $condition) {
      caseid
      laststatus
      history
      createdAt
      updatedAt
    }
  }
`;

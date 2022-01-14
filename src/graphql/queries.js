/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        case {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUscisCase = /* GraphQL */ `
  query GetUscisCase($id: ID!, $caseid: ID!) {
    getUscisCase(id: $id, caseid: $caseid) {
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
export const listUscisCases = /* GraphQL */ `
  query ListUscisCases(
    $id: ID
    $caseid: ModelIDKeyConditionInput
    $filter: ModelUscisCaseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUscisCases(
      id: $id
      caseid: $caseid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
  }
`;
export const getUscisStatus = /* GraphQL */ `
  query GetUscisStatus($caseid: ID!) {
    getUscisStatus(caseid: $caseid) {
      caseid
      laststatus
      history
      createdAt
      updatedAt
    }
  }
`;
export const listUscisStatuses = /* GraphQL */ `
  query ListUscisStatuses(
    $caseid: ID
    $filter: ModelUscisStatusFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUscisStatuses(
      caseid: $caseid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        caseid
        laststatus
        history
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const uscisCasesByCaseID = /* GraphQL */ `
  query UscisCasesByCaseID(
    $caseid: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUscisCaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    uscisCasesByCaseID(
      caseid: $caseid
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const uscisStatusesByLastStatus = /* GraphQL */ `
  query UscisStatusesByLastStatus(
    $laststatus: String!
    $caseid: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUscisStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    uscisStatusesByLastStatus(
      laststatus: $laststatus
      caseid: $caseid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        caseid
        laststatus
        history
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

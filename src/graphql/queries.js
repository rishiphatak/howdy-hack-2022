/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSocialPostProf = /* GraphQL */ `
  query GetSocialPostProf($id: ID!) {
    getSocialPostProf(id: $id) {
      id
      author
      text
      createdAt
      likes
      topic
      class
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSocialPostProfs = /* GraphQL */ `
  query ListSocialPostProfs(
    $filter: ModelSocialPostProfFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSocialPostProfs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        author
        text
        createdAt
        likes
        topic
        class
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSocialPostProfs = /* GraphQL */ `
  query SyncSocialPostProfs(
    $filter: ModelSocialPostProfFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSocialPostProfs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        author
        text
        createdAt
        likes
        topic
        class
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;

// eslint-disable
// this is an auto generated file. This will be overwritten

export const getProfile = `query GetProfile($id: ID!) {
  getProfile(id: $id) {
    id
    firstName
    lastName
    phoneNumber
    dayOfBirth
    monthOfBirth
    yearOfBirth
    group {
      id
      name
    }
    leader {
      id
      name
    }
  }
}
`;
export const listProfiles = `query ListProfiles(
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      phoneNumber
      dayOfBirth
      monthOfBirth
      yearOfBirth
      group {
        id
        name
      }
      leader {
        id
        name
      }
    }
    nextToken
  }
}
`;
export const getGroup = `query GetGroup($id: ID!) {
  getGroup(id: $id) {
    id
    name
    members {
      items {
        id
        firstName
        lastName
        phoneNumber
        dayOfBirth
        monthOfBirth
        yearOfBirth
      }
      nextToken
    }
    leader {
      id
      firstName
      lastName
      phoneNumber
      dayOfBirth
      monthOfBirth
      yearOfBirth
    }
  }
}
`;
export const listGroups = `query ListGroups(
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      members {
        items {
          id
          firstName
          lastName
          phoneNumber
          dayOfBirth
          monthOfBirth
          yearOfBirth
        }
        nextToken
      }
      leader {
        id
        firstName
        lastName
        phoneNumber
        dayOfBirth
        monthOfBirth
        yearOfBirth
      }
    }
    nextToken
  }
}
`;

// eslint-disable
// this is an auto generated file. This will be overwritten

export const createProfile = `mutation CreateProfile($input: CreateProfileInput!) {
  createProfile(input: $input) {
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
export const updateProfile = `mutation UpdateProfile($input: UpdateProfileInput!) {
  updateProfile(input: $input) {
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
export const deleteProfile = `mutation DeleteProfile($input: DeleteProfileInput!) {
  deleteProfile(input: $input) {
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
export const createGroup = `mutation CreateGroup($input: CreateGroupInput!) {
  createGroup(input: $input) {
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
export const updateGroup = `mutation UpdateGroup($input: UpdateGroupInput!) {
  updateGroup(input: $input) {
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
export const deleteGroup = `mutation DeleteGroup($input: DeleteGroupInput!) {
  deleteGroup(input: $input) {
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

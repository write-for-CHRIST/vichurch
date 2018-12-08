// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateProfile = `subscription OnCreateProfile {
  onCreateProfile {
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
export const onUpdateProfile = `subscription OnUpdateProfile {
  onUpdateProfile {
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
export const onDeleteProfile = `subscription OnDeleteProfile {
  onDeleteProfile {
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
export const onCreateGroup = `subscription OnCreateGroup {
  onCreateGroup {
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
export const onUpdateGroup = `subscription OnUpdateGroup {
  onUpdateGroup {
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
export const onDeleteGroup = `subscription OnDeleteGroup {
  onDeleteGroup {
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

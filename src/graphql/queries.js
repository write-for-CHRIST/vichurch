// eslint-disable
// this is an auto generated file. This will be overwritten

export const getVcProfile = `query GetVcProfile($id: ID!) {
  getVCProfile(id: $id) {
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
    attendances {
      items {
        id
        presence
      }
      nextToken
    }
  }
}
`;
export const listVcProfiles = `query ListVcProfiles(
  $filter: ModelVCProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listVCProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      attendances {
        items {
          id
          presence
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getVcGroup = `query GetVcGroup($id: ID!) {
  getVCGroup(id: $id) {
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
export const listVcGroups = `query ListVcGroups(
  $filter: ModelVCGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listVCGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const getVcActivityList = `query GetVcActivityList($id: ID!) {
  getVCActivityList(id: $id) {
    id
    name
    schedules {
      items {
        id
        start
        end
      }
      nextToken
    }
  }
}
`;
export const listVcActivityLists = `query ListVcActivityLists(
  $filter: ModelVCActivityListFilterInput
  $limit: Int
  $nextToken: String
) {
  listVCActivityLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      schedules {
        items {
          id
          start
          end
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getVcActivitySchedule = `query GetVcActivitySchedule($id: ID!) {
  getVCActivitySchedule(id: $id) {
    id
    start
    end
    activity {
      id
      name
    }
    attendances {
      items {
        id
        presence
      }
      nextToken
    }
  }
}
`;
export const listVcActivitySchedules = `query ListVcActivitySchedules(
  $filter: ModelVCActivityScheduleFilterInput
  $limit: Int
  $nextToken: String
) {
  listVCActivitySchedules(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      start
      end
      activity {
        id
        name
      }
      attendances {
        items {
          id
          presence
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getVcActivityAttendance = `query GetVcActivityAttendance($id: ID!) {
  getVCActivityAttendance(id: $id) {
    id
    schedule {
      id
      start
      end
    }
    member {
      id
      firstName
      lastName
      phoneNumber
      dayOfBirth
      monthOfBirth
      yearOfBirth
    }
    presence
  }
}
`;
export const listVcActivityAttendances = `query ListVcActivityAttendances(
  $filter: ModelVCActivityAttendanceFilterInput
  $limit: Int
  $nextToken: String
) {
  listVCActivityAttendances(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      schedule {
        id
        start
        end
      }
      member {
        id
        firstName
        lastName
        phoneNumber
        dayOfBirth
        monthOfBirth
        yearOfBirth
      }
      presence
    }
    nextToken
  }
}
`;

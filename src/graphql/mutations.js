// eslint-disable
// this is an auto generated file. This will be overwritten

export const createVcProfile = `mutation CreateVcProfile($input: CreateVCProfileInput!) {
  createVCProfile(input: $input) {
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
export const updateVcProfile = `mutation UpdateVcProfile($input: UpdateVCProfileInput!) {
  updateVCProfile(input: $input) {
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
export const deleteVcProfile = `mutation DeleteVcProfile($input: DeleteVCProfileInput!) {
  deleteVCProfile(input: $input) {
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
export const createVcGroup = `mutation CreateVcGroup($input: CreateVCGroupInput!) {
  createVCGroup(input: $input) {
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
export const updateVcGroup = `mutation UpdateVcGroup($input: UpdateVCGroupInput!) {
  updateVCGroup(input: $input) {
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
export const deleteVcGroup = `mutation DeleteVcGroup($input: DeleteVCGroupInput!) {
  deleteVCGroup(input: $input) {
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
export const createVcActivityList = `mutation CreateVcActivityList($input: CreateVCActivityListInput!) {
  createVCActivityList(input: $input) {
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
export const updateVcActivityList = `mutation UpdateVcActivityList($input: UpdateVCActivityListInput!) {
  updateVCActivityList(input: $input) {
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
export const deleteVcActivityList = `mutation DeleteVcActivityList($input: DeleteVCActivityListInput!) {
  deleteVCActivityList(input: $input) {
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
export const createVcActivitySchedule = `mutation CreateVcActivitySchedule($input: CreateVCActivityScheduleInput!) {
  createVCActivitySchedule(input: $input) {
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
export const updateVcActivitySchedule = `mutation UpdateVcActivitySchedule($input: UpdateVCActivityScheduleInput!) {
  updateVCActivitySchedule(input: $input) {
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
export const deleteVcActivitySchedule = `mutation DeleteVcActivitySchedule($input: DeleteVCActivityScheduleInput!) {
  deleteVCActivitySchedule(input: $input) {
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
export const createVcActivityAttendance = `mutation CreateVcActivityAttendance($input: CreateVCActivityAttendanceInput!) {
  createVCActivityAttendance(input: $input) {
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
export const updateVcActivityAttendance = `mutation UpdateVcActivityAttendance($input: UpdateVCActivityAttendanceInput!) {
  updateVCActivityAttendance(input: $input) {
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
export const deleteVcActivityAttendance = `mutation DeleteVcActivityAttendance($input: DeleteVCActivityAttendanceInput!) {
  deleteVCActivityAttendance(input: $input) {
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

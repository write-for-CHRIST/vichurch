// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateVcProfile = `subscription OnCreateVcProfile {
  onCreateVCProfile {
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
export const onUpdateVcProfile = `subscription OnUpdateVcProfile {
  onUpdateVCProfile {
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
export const onDeleteVcProfile = `subscription OnDeleteVcProfile {
  onDeleteVCProfile {
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
export const onCreateVcGroup = `subscription OnCreateVcGroup {
  onCreateVCGroup {
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
export const onUpdateVcGroup = `subscription OnUpdateVcGroup {
  onUpdateVCGroup {
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
export const onDeleteVcGroup = `subscription OnDeleteVcGroup {
  onDeleteVCGroup {
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
export const onCreateVcActivityList = `subscription OnCreateVcActivityList {
  onCreateVCActivityList {
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
export const onUpdateVcActivityList = `subscription OnUpdateVcActivityList {
  onUpdateVCActivityList {
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
export const onDeleteVcActivityList = `subscription OnDeleteVcActivityList {
  onDeleteVCActivityList {
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
export const onCreateVcActivitySchedule = `subscription OnCreateVcActivitySchedule {
  onCreateVCActivitySchedule {
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
export const onUpdateVcActivitySchedule = `subscription OnUpdateVcActivitySchedule {
  onUpdateVCActivitySchedule {
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
export const onDeleteVcActivitySchedule = `subscription OnDeleteVcActivitySchedule {
  onDeleteVCActivitySchedule {
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
export const onCreateVcActivityAttendance = `subscription OnCreateVcActivityAttendance {
  onCreateVCActivityAttendance {
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
export const onUpdateVcActivityAttendance = `subscription OnUpdateVcActivityAttendance {
  onUpdateVCActivityAttendance {
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
export const onDeleteVcActivityAttendance = `subscription OnDeleteVcActivityAttendance {
  onDeleteVCActivityAttendance {
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

export const typeDefs = /* GraphQL */ `type ActivityAttendance {
  id: ID!
  schedule: ActivitySchedule!
  member: Profile!
  presence: Boolean!
}

type ActivityAttendanceConnection {
  pageInfo: PageInfo!
  edges: [ActivityAttendanceEdge]!
  aggregate: AggregateActivityAttendance!
}

input ActivityAttendanceCreateInput {
  schedule: ActivityScheduleCreateOneWithoutAttendancesInput!
  member: ProfileCreateOneWithoutAttendancesInput!
  presence: Boolean!
}

input ActivityAttendanceCreateManyWithoutMemberInput {
  create: [ActivityAttendanceCreateWithoutMemberInput!]
  connect: [ActivityAttendanceWhereUniqueInput!]
}

input ActivityAttendanceCreateManyWithoutScheduleInput {
  create: [ActivityAttendanceCreateWithoutScheduleInput!]
  connect: [ActivityAttendanceWhereUniqueInput!]
}

input ActivityAttendanceCreateWithoutMemberInput {
  schedule: ActivityScheduleCreateOneWithoutAttendancesInput!
  presence: Boolean!
}

input ActivityAttendanceCreateWithoutScheduleInput {
  member: ProfileCreateOneWithoutAttendancesInput!
  presence: Boolean!
}

type ActivityAttendanceEdge {
  node: ActivityAttendance!
  cursor: String!
}

enum ActivityAttendanceOrderByInput {
  id_ASC
  id_DESC
  presence_ASC
  presence_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ActivityAttendancePreviousValues {
  id: ID!
  presence: Boolean!
}

input ActivityAttendanceScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  presence: Boolean
  presence_not: Boolean
  AND: [ActivityAttendanceScalarWhereInput!]
  OR: [ActivityAttendanceScalarWhereInput!]
  NOT: [ActivityAttendanceScalarWhereInput!]
}

type ActivityAttendanceSubscriptionPayload {
  mutation: MutationType!
  node: ActivityAttendance
  updatedFields: [String!]
  previousValues: ActivityAttendancePreviousValues
}

input ActivityAttendanceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ActivityAttendanceWhereInput
  AND: [ActivityAttendanceSubscriptionWhereInput!]
  OR: [ActivityAttendanceSubscriptionWhereInput!]
  NOT: [ActivityAttendanceSubscriptionWhereInput!]
}

input ActivityAttendanceUpdateInput {
  schedule: ActivityScheduleUpdateOneRequiredWithoutAttendancesInput
  member: ProfileUpdateOneRequiredWithoutAttendancesInput
  presence: Boolean
}

input ActivityAttendanceUpdateManyDataInput {
  presence: Boolean
}

input ActivityAttendanceUpdateManyMutationInput {
  presence: Boolean
}

input ActivityAttendanceUpdateManyWithoutMemberInput {
  create: [ActivityAttendanceCreateWithoutMemberInput!]
  delete: [ActivityAttendanceWhereUniqueInput!]
  connect: [ActivityAttendanceWhereUniqueInput!]
  disconnect: [ActivityAttendanceWhereUniqueInput!]
  update: [ActivityAttendanceUpdateWithWhereUniqueWithoutMemberInput!]
  upsert: [ActivityAttendanceUpsertWithWhereUniqueWithoutMemberInput!]
  deleteMany: [ActivityAttendanceScalarWhereInput!]
  updateMany: [ActivityAttendanceUpdateManyWithWhereNestedInput!]
}

input ActivityAttendanceUpdateManyWithoutScheduleInput {
  create: [ActivityAttendanceCreateWithoutScheduleInput!]
  delete: [ActivityAttendanceWhereUniqueInput!]
  connect: [ActivityAttendanceWhereUniqueInput!]
  disconnect: [ActivityAttendanceWhereUniqueInput!]
  update: [ActivityAttendanceUpdateWithWhereUniqueWithoutScheduleInput!]
  upsert: [ActivityAttendanceUpsertWithWhereUniqueWithoutScheduleInput!]
  deleteMany: [ActivityAttendanceScalarWhereInput!]
  updateMany: [ActivityAttendanceUpdateManyWithWhereNestedInput!]
}

input ActivityAttendanceUpdateManyWithWhereNestedInput {
  where: ActivityAttendanceScalarWhereInput!
  data: ActivityAttendanceUpdateManyDataInput!
}

input ActivityAttendanceUpdateWithoutMemberDataInput {
  schedule: ActivityScheduleUpdateOneRequiredWithoutAttendancesInput
  presence: Boolean
}

input ActivityAttendanceUpdateWithoutScheduleDataInput {
  member: ProfileUpdateOneRequiredWithoutAttendancesInput
  presence: Boolean
}

input ActivityAttendanceUpdateWithWhereUniqueWithoutMemberInput {
  where: ActivityAttendanceWhereUniqueInput!
  data: ActivityAttendanceUpdateWithoutMemberDataInput!
}

input ActivityAttendanceUpdateWithWhereUniqueWithoutScheduleInput {
  where: ActivityAttendanceWhereUniqueInput!
  data: ActivityAttendanceUpdateWithoutScheduleDataInput!
}

input ActivityAttendanceUpsertWithWhereUniqueWithoutMemberInput {
  where: ActivityAttendanceWhereUniqueInput!
  update: ActivityAttendanceUpdateWithoutMemberDataInput!
  create: ActivityAttendanceCreateWithoutMemberInput!
}

input ActivityAttendanceUpsertWithWhereUniqueWithoutScheduleInput {
  where: ActivityAttendanceWhereUniqueInput!
  update: ActivityAttendanceUpdateWithoutScheduleDataInput!
  create: ActivityAttendanceCreateWithoutScheduleInput!
}

input ActivityAttendanceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  schedule: ActivityScheduleWhereInput
  member: ProfileWhereInput
  presence: Boolean
  presence_not: Boolean
  AND: [ActivityAttendanceWhereInput!]
  OR: [ActivityAttendanceWhereInput!]
  NOT: [ActivityAttendanceWhereInput!]
}

input ActivityAttendanceWhereUniqueInput {
  id: ID
}

type ActivityList {
  id: ID!
  name: String!
  schedules(where: ActivityScheduleWhereInput, orderBy: ActivityScheduleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActivitySchedule!]
}

type ActivityListConnection {
  pageInfo: PageInfo!
  edges: [ActivityListEdge]!
  aggregate: AggregateActivityList!
}

input ActivityListCreateInput {
  name: String!
  schedules: ActivityScheduleCreateManyWithoutActivityInput
}

input ActivityListCreateOneWithoutSchedulesInput {
  create: ActivityListCreateWithoutSchedulesInput
  connect: ActivityListWhereUniqueInput
}

input ActivityListCreateWithoutSchedulesInput {
  name: String!
}

type ActivityListEdge {
  node: ActivityList!
  cursor: String!
}

enum ActivityListOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ActivityListPreviousValues {
  id: ID!
  name: String!
}

type ActivityListSubscriptionPayload {
  mutation: MutationType!
  node: ActivityList
  updatedFields: [String!]
  previousValues: ActivityListPreviousValues
}

input ActivityListSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ActivityListWhereInput
  AND: [ActivityListSubscriptionWhereInput!]
  OR: [ActivityListSubscriptionWhereInput!]
  NOT: [ActivityListSubscriptionWhereInput!]
}

input ActivityListUpdateInput {
  name: String
  schedules: ActivityScheduleUpdateManyWithoutActivityInput
}

input ActivityListUpdateManyMutationInput {
  name: String
}

input ActivityListUpdateOneRequiredWithoutSchedulesInput {
  create: ActivityListCreateWithoutSchedulesInput
  update: ActivityListUpdateWithoutSchedulesDataInput
  upsert: ActivityListUpsertWithoutSchedulesInput
  connect: ActivityListWhereUniqueInput
}

input ActivityListUpdateWithoutSchedulesDataInput {
  name: String
}

input ActivityListUpsertWithoutSchedulesInput {
  update: ActivityListUpdateWithoutSchedulesDataInput!
  create: ActivityListCreateWithoutSchedulesInput!
}

input ActivityListWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  schedules_every: ActivityScheduleWhereInput
  schedules_some: ActivityScheduleWhereInput
  schedules_none: ActivityScheduleWhereInput
  AND: [ActivityListWhereInput!]
  OR: [ActivityListWhereInput!]
  NOT: [ActivityListWhereInput!]
}

input ActivityListWhereUniqueInput {
  id: ID
}

type ActivitySchedule {
  id: ID!
  start: DateTime!
  end: DateTime!
  activity: ActivityList!
  attendances(where: ActivityAttendanceWhereInput, orderBy: ActivityAttendanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActivityAttendance!]
}

type ActivityScheduleConnection {
  pageInfo: PageInfo!
  edges: [ActivityScheduleEdge]!
  aggregate: AggregateActivitySchedule!
}

input ActivityScheduleCreateInput {
  start: DateTime!
  end: DateTime!
  activity: ActivityListCreateOneWithoutSchedulesInput!
  attendances: ActivityAttendanceCreateManyWithoutScheduleInput
}

input ActivityScheduleCreateManyWithoutActivityInput {
  create: [ActivityScheduleCreateWithoutActivityInput!]
  connect: [ActivityScheduleWhereUniqueInput!]
}

input ActivityScheduleCreateOneWithoutAttendancesInput {
  create: ActivityScheduleCreateWithoutAttendancesInput
  connect: ActivityScheduleWhereUniqueInput
}

input ActivityScheduleCreateWithoutActivityInput {
  start: DateTime!
  end: DateTime!
  attendances: ActivityAttendanceCreateManyWithoutScheduleInput
}

input ActivityScheduleCreateWithoutAttendancesInput {
  start: DateTime!
  end: DateTime!
  activity: ActivityListCreateOneWithoutSchedulesInput!
}

type ActivityScheduleEdge {
  node: ActivitySchedule!
  cursor: String!
}

enum ActivityScheduleOrderByInput {
  id_ASC
  id_DESC
  start_ASC
  start_DESC
  end_ASC
  end_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ActivitySchedulePreviousValues {
  id: ID!
  start: DateTime!
  end: DateTime!
}

input ActivityScheduleScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  start: DateTime
  start_not: DateTime
  start_in: [DateTime!]
  start_not_in: [DateTime!]
  start_lt: DateTime
  start_lte: DateTime
  start_gt: DateTime
  start_gte: DateTime
  end: DateTime
  end_not: DateTime
  end_in: [DateTime!]
  end_not_in: [DateTime!]
  end_lt: DateTime
  end_lte: DateTime
  end_gt: DateTime
  end_gte: DateTime
  AND: [ActivityScheduleScalarWhereInput!]
  OR: [ActivityScheduleScalarWhereInput!]
  NOT: [ActivityScheduleScalarWhereInput!]
}

type ActivityScheduleSubscriptionPayload {
  mutation: MutationType!
  node: ActivitySchedule
  updatedFields: [String!]
  previousValues: ActivitySchedulePreviousValues
}

input ActivityScheduleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ActivityScheduleWhereInput
  AND: [ActivityScheduleSubscriptionWhereInput!]
  OR: [ActivityScheduleSubscriptionWhereInput!]
  NOT: [ActivityScheduleSubscriptionWhereInput!]
}

input ActivityScheduleUpdateInput {
  start: DateTime
  end: DateTime
  activity: ActivityListUpdateOneRequiredWithoutSchedulesInput
  attendances: ActivityAttendanceUpdateManyWithoutScheduleInput
}

input ActivityScheduleUpdateManyDataInput {
  start: DateTime
  end: DateTime
}

input ActivityScheduleUpdateManyMutationInput {
  start: DateTime
  end: DateTime
}

input ActivityScheduleUpdateManyWithoutActivityInput {
  create: [ActivityScheduleCreateWithoutActivityInput!]
  delete: [ActivityScheduleWhereUniqueInput!]
  connect: [ActivityScheduleWhereUniqueInput!]
  disconnect: [ActivityScheduleWhereUniqueInput!]
  update: [ActivityScheduleUpdateWithWhereUniqueWithoutActivityInput!]
  upsert: [ActivityScheduleUpsertWithWhereUniqueWithoutActivityInput!]
  deleteMany: [ActivityScheduleScalarWhereInput!]
  updateMany: [ActivityScheduleUpdateManyWithWhereNestedInput!]
}

input ActivityScheduleUpdateManyWithWhereNestedInput {
  where: ActivityScheduleScalarWhereInput!
  data: ActivityScheduleUpdateManyDataInput!
}

input ActivityScheduleUpdateOneRequiredWithoutAttendancesInput {
  create: ActivityScheduleCreateWithoutAttendancesInput
  update: ActivityScheduleUpdateWithoutAttendancesDataInput
  upsert: ActivityScheduleUpsertWithoutAttendancesInput
  connect: ActivityScheduleWhereUniqueInput
}

input ActivityScheduleUpdateWithoutActivityDataInput {
  start: DateTime
  end: DateTime
  attendances: ActivityAttendanceUpdateManyWithoutScheduleInput
}

input ActivityScheduleUpdateWithoutAttendancesDataInput {
  start: DateTime
  end: DateTime
  activity: ActivityListUpdateOneRequiredWithoutSchedulesInput
}

input ActivityScheduleUpdateWithWhereUniqueWithoutActivityInput {
  where: ActivityScheduleWhereUniqueInput!
  data: ActivityScheduleUpdateWithoutActivityDataInput!
}

input ActivityScheduleUpsertWithoutAttendancesInput {
  update: ActivityScheduleUpdateWithoutAttendancesDataInput!
  create: ActivityScheduleCreateWithoutAttendancesInput!
}

input ActivityScheduleUpsertWithWhereUniqueWithoutActivityInput {
  where: ActivityScheduleWhereUniqueInput!
  update: ActivityScheduleUpdateWithoutActivityDataInput!
  create: ActivityScheduleCreateWithoutActivityInput!
}

input ActivityScheduleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  start: DateTime
  start_not: DateTime
  start_in: [DateTime!]
  start_not_in: [DateTime!]
  start_lt: DateTime
  start_lte: DateTime
  start_gt: DateTime
  start_gte: DateTime
  end: DateTime
  end_not: DateTime
  end_in: [DateTime!]
  end_not_in: [DateTime!]
  end_lt: DateTime
  end_lte: DateTime
  end_gt: DateTime
  end_gte: DateTime
  activity: ActivityListWhereInput
  attendances_every: ActivityAttendanceWhereInput
  attendances_some: ActivityAttendanceWhereInput
  attendances_none: ActivityAttendanceWhereInput
  AND: [ActivityScheduleWhereInput!]
  OR: [ActivityScheduleWhereInput!]
  NOT: [ActivityScheduleWhereInput!]
}

input ActivityScheduleWhereUniqueInput {
  id: ID
}

type AggregateActivityAttendance {
  count: Int!
}

type AggregateActivityList {
  count: Int!
}

type AggregateActivitySchedule {
  count: Int!
}

type AggregateGroup {
  count: Int!
}

type AggregateProfile {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Group {
  id: ID!
  name: String!
  members(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile!]
  leader: Profile
}

type GroupConnection {
  pageInfo: PageInfo!
  edges: [GroupEdge]!
  aggregate: AggregateGroup!
}

input GroupCreateInput {
  name: String!
  members: ProfileCreateManyWithoutGroupInput
  leader: ProfileCreateOneWithoutLeaderInput
}

input GroupCreateOneWithoutLeaderInput {
  create: GroupCreateWithoutLeaderInput
  connect: GroupWhereUniqueInput
}

input GroupCreateOneWithoutMembersInput {
  create: GroupCreateWithoutMembersInput
  connect: GroupWhereUniqueInput
}

input GroupCreateWithoutLeaderInput {
  name: String!
  members: ProfileCreateManyWithoutGroupInput
}

input GroupCreateWithoutMembersInput {
  name: String!
  leader: ProfileCreateOneWithoutLeaderInput
}

type GroupEdge {
  node: Group!
  cursor: String!
}

enum GroupOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GroupPreviousValues {
  id: ID!
  name: String!
}

type GroupSubscriptionPayload {
  mutation: MutationType!
  node: Group
  updatedFields: [String!]
  previousValues: GroupPreviousValues
}

input GroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GroupWhereInput
  AND: [GroupSubscriptionWhereInput!]
  OR: [GroupSubscriptionWhereInput!]
  NOT: [GroupSubscriptionWhereInput!]
}

input GroupUpdateInput {
  name: String
  members: ProfileUpdateManyWithoutGroupInput
  leader: ProfileUpdateOneWithoutLeaderInput
}

input GroupUpdateManyMutationInput {
  name: String
}

input GroupUpdateOneWithoutLeaderInput {
  create: GroupCreateWithoutLeaderInput
  update: GroupUpdateWithoutLeaderDataInput
  upsert: GroupUpsertWithoutLeaderInput
  delete: Boolean
  disconnect: Boolean
  connect: GroupWhereUniqueInput
}

input GroupUpdateOneWithoutMembersInput {
  create: GroupCreateWithoutMembersInput
  update: GroupUpdateWithoutMembersDataInput
  upsert: GroupUpsertWithoutMembersInput
  delete: Boolean
  disconnect: Boolean
  connect: GroupWhereUniqueInput
}

input GroupUpdateWithoutLeaderDataInput {
  name: String
  members: ProfileUpdateManyWithoutGroupInput
}

input GroupUpdateWithoutMembersDataInput {
  name: String
  leader: ProfileUpdateOneWithoutLeaderInput
}

input GroupUpsertWithoutLeaderInput {
  update: GroupUpdateWithoutLeaderDataInput!
  create: GroupCreateWithoutLeaderInput!
}

input GroupUpsertWithoutMembersInput {
  update: GroupUpdateWithoutMembersDataInput!
  create: GroupCreateWithoutMembersInput!
}

input GroupWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  members_every: ProfileWhereInput
  members_some: ProfileWhereInput
  members_none: ProfileWhereInput
  leader: ProfileWhereInput
  AND: [GroupWhereInput!]
  OR: [GroupWhereInput!]
  NOT: [GroupWhereInput!]
}

input GroupWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createActivityAttendance(data: ActivityAttendanceCreateInput!): ActivityAttendance!
  updateActivityAttendance(data: ActivityAttendanceUpdateInput!, where: ActivityAttendanceWhereUniqueInput!): ActivityAttendance
  updateManyActivityAttendances(data: ActivityAttendanceUpdateManyMutationInput!, where: ActivityAttendanceWhereInput): BatchPayload!
  upsertActivityAttendance(where: ActivityAttendanceWhereUniqueInput!, create: ActivityAttendanceCreateInput!, update: ActivityAttendanceUpdateInput!): ActivityAttendance!
  deleteActivityAttendance(where: ActivityAttendanceWhereUniqueInput!): ActivityAttendance
  deleteManyActivityAttendances(where: ActivityAttendanceWhereInput): BatchPayload!
  createActivityList(data: ActivityListCreateInput!): ActivityList!
  updateActivityList(data: ActivityListUpdateInput!, where: ActivityListWhereUniqueInput!): ActivityList
  updateManyActivityLists(data: ActivityListUpdateManyMutationInput!, where: ActivityListWhereInput): BatchPayload!
  upsertActivityList(where: ActivityListWhereUniqueInput!, create: ActivityListCreateInput!, update: ActivityListUpdateInput!): ActivityList!
  deleteActivityList(where: ActivityListWhereUniqueInput!): ActivityList
  deleteManyActivityLists(where: ActivityListWhereInput): BatchPayload!
  createActivitySchedule(data: ActivityScheduleCreateInput!): ActivitySchedule!
  updateActivitySchedule(data: ActivityScheduleUpdateInput!, where: ActivityScheduleWhereUniqueInput!): ActivitySchedule
  updateManyActivitySchedules(data: ActivityScheduleUpdateManyMutationInput!, where: ActivityScheduleWhereInput): BatchPayload!
  upsertActivitySchedule(where: ActivityScheduleWhereUniqueInput!, create: ActivityScheduleCreateInput!, update: ActivityScheduleUpdateInput!): ActivitySchedule!
  deleteActivitySchedule(where: ActivityScheduleWhereUniqueInput!): ActivitySchedule
  deleteManyActivitySchedules(where: ActivityScheduleWhereInput): BatchPayload!
  createGroup(data: GroupCreateInput!): Group!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateManyGroups(data: GroupUpdateManyMutationInput!, where: GroupWhereInput): BatchPayload!
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  createProfile(data: ProfileCreateInput!): Profile!
  updateProfile(data: ProfileUpdateInput!, where: ProfileWhereUniqueInput!): Profile
  updateManyProfiles(data: ProfileUpdateManyMutationInput!, where: ProfileWhereInput): BatchPayload!
  upsertProfile(where: ProfileWhereUniqueInput!, create: ProfileCreateInput!, update: ProfileUpdateInput!): Profile!
  deleteProfile(where: ProfileWhereUniqueInput!): Profile
  deleteManyProfiles(where: ProfileWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Profile {
  id: ID!
  firstName: String!
  lastName: String!
  phoneNumber: String
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  group: Group
  leader: Group
  attendances(where: ActivityAttendanceWhereInput, orderBy: ActivityAttendanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActivityAttendance!]
}

type ProfileConnection {
  pageInfo: PageInfo!
  edges: [ProfileEdge]!
  aggregate: AggregateProfile!
}

input ProfileCreateInput {
  firstName: String!
  lastName: String!
  phoneNumber: String
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  group: GroupCreateOneWithoutMembersInput
  leader: GroupCreateOneWithoutLeaderInput
  attendances: ActivityAttendanceCreateManyWithoutMemberInput
}

input ProfileCreateManyWithoutGroupInput {
  create: [ProfileCreateWithoutGroupInput!]
  connect: [ProfileWhereUniqueInput!]
}

input ProfileCreateOneWithoutAttendancesInput {
  create: ProfileCreateWithoutAttendancesInput
  connect: ProfileWhereUniqueInput
}

input ProfileCreateOneWithoutLeaderInput {
  create: ProfileCreateWithoutLeaderInput
  connect: ProfileWhereUniqueInput
}

input ProfileCreateWithoutAttendancesInput {
  firstName: String!
  lastName: String!
  phoneNumber: String
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  group: GroupCreateOneWithoutMembersInput
  leader: GroupCreateOneWithoutLeaderInput
}

input ProfileCreateWithoutGroupInput {
  firstName: String!
  lastName: String!
  phoneNumber: String
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  leader: GroupCreateOneWithoutLeaderInput
  attendances: ActivityAttendanceCreateManyWithoutMemberInput
}

input ProfileCreateWithoutLeaderInput {
  firstName: String!
  lastName: String!
  phoneNumber: String
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  group: GroupCreateOneWithoutMembersInput
  attendances: ActivityAttendanceCreateManyWithoutMemberInput
}

type ProfileEdge {
  node: Profile!
  cursor: String!
}

enum ProfileOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  dayOfBirth_ASC
  dayOfBirth_DESC
  monthOfBirth_ASC
  monthOfBirth_DESC
  yearOfBirth_ASC
  yearOfBirth_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProfilePreviousValues {
  id: ID!
  firstName: String!
  lastName: String!
  phoneNumber: String
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
}

input ProfileScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  phoneNumber: String
  phoneNumber_not: String
  phoneNumber_in: [String!]
  phoneNumber_not_in: [String!]
  phoneNumber_lt: String
  phoneNumber_lte: String
  phoneNumber_gt: String
  phoneNumber_gte: String
  phoneNumber_contains: String
  phoneNumber_not_contains: String
  phoneNumber_starts_with: String
  phoneNumber_not_starts_with: String
  phoneNumber_ends_with: String
  phoneNumber_not_ends_with: String
  dayOfBirth: Int
  dayOfBirth_not: Int
  dayOfBirth_in: [Int!]
  dayOfBirth_not_in: [Int!]
  dayOfBirth_lt: Int
  dayOfBirth_lte: Int
  dayOfBirth_gt: Int
  dayOfBirth_gte: Int
  monthOfBirth: Int
  monthOfBirth_not: Int
  monthOfBirth_in: [Int!]
  monthOfBirth_not_in: [Int!]
  monthOfBirth_lt: Int
  monthOfBirth_lte: Int
  monthOfBirth_gt: Int
  monthOfBirth_gte: Int
  yearOfBirth: Int
  yearOfBirth_not: Int
  yearOfBirth_in: [Int!]
  yearOfBirth_not_in: [Int!]
  yearOfBirth_lt: Int
  yearOfBirth_lte: Int
  yearOfBirth_gt: Int
  yearOfBirth_gte: Int
  AND: [ProfileScalarWhereInput!]
  OR: [ProfileScalarWhereInput!]
  NOT: [ProfileScalarWhereInput!]
}

type ProfileSubscriptionPayload {
  mutation: MutationType!
  node: Profile
  updatedFields: [String!]
  previousValues: ProfilePreviousValues
}

input ProfileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProfileWhereInput
  AND: [ProfileSubscriptionWhereInput!]
  OR: [ProfileSubscriptionWhereInput!]
  NOT: [ProfileSubscriptionWhereInput!]
}

input ProfileUpdateInput {
  firstName: String
  lastName: String
  phoneNumber: String
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  group: GroupUpdateOneWithoutMembersInput
  leader: GroupUpdateOneWithoutLeaderInput
  attendances: ActivityAttendanceUpdateManyWithoutMemberInput
}

input ProfileUpdateManyDataInput {
  firstName: String
  lastName: String
  phoneNumber: String
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
}

input ProfileUpdateManyMutationInput {
  firstName: String
  lastName: String
  phoneNumber: String
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
}

input ProfileUpdateManyWithoutGroupInput {
  create: [ProfileCreateWithoutGroupInput!]
  delete: [ProfileWhereUniqueInput!]
  connect: [ProfileWhereUniqueInput!]
  disconnect: [ProfileWhereUniqueInput!]
  update: [ProfileUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [ProfileUpsertWithWhereUniqueWithoutGroupInput!]
  deleteMany: [ProfileScalarWhereInput!]
  updateMany: [ProfileUpdateManyWithWhereNestedInput!]
}

input ProfileUpdateManyWithWhereNestedInput {
  where: ProfileScalarWhereInput!
  data: ProfileUpdateManyDataInput!
}

input ProfileUpdateOneRequiredWithoutAttendancesInput {
  create: ProfileCreateWithoutAttendancesInput
  update: ProfileUpdateWithoutAttendancesDataInput
  upsert: ProfileUpsertWithoutAttendancesInput
  connect: ProfileWhereUniqueInput
}

input ProfileUpdateOneWithoutLeaderInput {
  create: ProfileCreateWithoutLeaderInput
  update: ProfileUpdateWithoutLeaderDataInput
  upsert: ProfileUpsertWithoutLeaderInput
  delete: Boolean
  disconnect: Boolean
  connect: ProfileWhereUniqueInput
}

input ProfileUpdateWithoutAttendancesDataInput {
  firstName: String
  lastName: String
  phoneNumber: String
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  group: GroupUpdateOneWithoutMembersInput
  leader: GroupUpdateOneWithoutLeaderInput
}

input ProfileUpdateWithoutGroupDataInput {
  firstName: String
  lastName: String
  phoneNumber: String
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  leader: GroupUpdateOneWithoutLeaderInput
  attendances: ActivityAttendanceUpdateManyWithoutMemberInput
}

input ProfileUpdateWithoutLeaderDataInput {
  firstName: String
  lastName: String
  phoneNumber: String
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  group: GroupUpdateOneWithoutMembersInput
  attendances: ActivityAttendanceUpdateManyWithoutMemberInput
}

input ProfileUpdateWithWhereUniqueWithoutGroupInput {
  where: ProfileWhereUniqueInput!
  data: ProfileUpdateWithoutGroupDataInput!
}

input ProfileUpsertWithoutAttendancesInput {
  update: ProfileUpdateWithoutAttendancesDataInput!
  create: ProfileCreateWithoutAttendancesInput!
}

input ProfileUpsertWithoutLeaderInput {
  update: ProfileUpdateWithoutLeaderDataInput!
  create: ProfileCreateWithoutLeaderInput!
}

input ProfileUpsertWithWhereUniqueWithoutGroupInput {
  where: ProfileWhereUniqueInput!
  update: ProfileUpdateWithoutGroupDataInput!
  create: ProfileCreateWithoutGroupInput!
}

input ProfileWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  phoneNumber: String
  phoneNumber_not: String
  phoneNumber_in: [String!]
  phoneNumber_not_in: [String!]
  phoneNumber_lt: String
  phoneNumber_lte: String
  phoneNumber_gt: String
  phoneNumber_gte: String
  phoneNumber_contains: String
  phoneNumber_not_contains: String
  phoneNumber_starts_with: String
  phoneNumber_not_starts_with: String
  phoneNumber_ends_with: String
  phoneNumber_not_ends_with: String
  dayOfBirth: Int
  dayOfBirth_not: Int
  dayOfBirth_in: [Int!]
  dayOfBirth_not_in: [Int!]
  dayOfBirth_lt: Int
  dayOfBirth_lte: Int
  dayOfBirth_gt: Int
  dayOfBirth_gte: Int
  monthOfBirth: Int
  monthOfBirth_not: Int
  monthOfBirth_in: [Int!]
  monthOfBirth_not_in: [Int!]
  monthOfBirth_lt: Int
  monthOfBirth_lte: Int
  monthOfBirth_gt: Int
  monthOfBirth_gte: Int
  yearOfBirth: Int
  yearOfBirth_not: Int
  yearOfBirth_in: [Int!]
  yearOfBirth_not_in: [Int!]
  yearOfBirth_lt: Int
  yearOfBirth_lte: Int
  yearOfBirth_gt: Int
  yearOfBirth_gte: Int
  group: GroupWhereInput
  leader: GroupWhereInput
  attendances_every: ActivityAttendanceWhereInput
  attendances_some: ActivityAttendanceWhereInput
  attendances_none: ActivityAttendanceWhereInput
  AND: [ProfileWhereInput!]
  OR: [ProfileWhereInput!]
  NOT: [ProfileWhereInput!]
}

input ProfileWhereUniqueInput {
  id: ID
}

type Query {
  activityAttendance(where: ActivityAttendanceWhereUniqueInput!): ActivityAttendance
  activityAttendances(where: ActivityAttendanceWhereInput, orderBy: ActivityAttendanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActivityAttendance]!
  activityAttendancesConnection(where: ActivityAttendanceWhereInput, orderBy: ActivityAttendanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActivityAttendanceConnection!
  activityList(where: ActivityListWhereUniqueInput!): ActivityList
  activityLists(where: ActivityListWhereInput, orderBy: ActivityListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActivityList]!
  activityListsConnection(where: ActivityListWhereInput, orderBy: ActivityListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActivityListConnection!
  activitySchedule(where: ActivityScheduleWhereUniqueInput!): ActivitySchedule
  activitySchedules(where: ActivityScheduleWhereInput, orderBy: ActivityScheduleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActivitySchedule]!
  activitySchedulesConnection(where: ActivityScheduleWhereInput, orderBy: ActivityScheduleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActivityScheduleConnection!
  group(where: GroupWhereUniqueInput!): Group
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  profile(where: ProfileWhereUniqueInput!): Profile
  profiles(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile]!
  profilesConnection(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProfileConnection!
  node(id: ID!): Node
}

type Subscription {
  activityAttendance(where: ActivityAttendanceSubscriptionWhereInput): ActivityAttendanceSubscriptionPayload
  activityList(where: ActivityListSubscriptionWhereInput): ActivityListSubscriptionPayload
  activitySchedule(where: ActivityScheduleSubscriptionWhereInput): ActivityScheduleSubscriptionPayload
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  profile(where: ProfileSubscriptionWhereInput): ProfileSubscriptionPayload
}
`
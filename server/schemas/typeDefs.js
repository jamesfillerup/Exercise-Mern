const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    exercises: [Exercise]
  }

  # type Exercise {
  #   _id: ID
  #   exerciseName: String
  #   userExercise: [userExercises]
  # }

  # new
  type Exercise {
    _id: ID
    exerciseName: String
    weight: Int
    repetitions: Int
    time: Int
    notes: String
    createdAt: String
  }

  #   type userExercises {
  #     _id: ID
  #     username: String
  #   weight: Int
  #   repetitions: Int
  #   time: Int
  #   notes: String
  #   createdAt: String
  # }

  type Auth {
    token: ID!
    user: User
  }

  type Player {
    username: String
    totalTime: Int
  }

  type WeeklyTime {
    week: String
    totalTime: Int
  }

  type ExerciseAnalysis {
    categoryName: String
    time: Int
  }

  type UserData {
    #sixWeekTime: [WeeklyTime]
    monthlyWeight: String
    exercises: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    exercises: [Exercise]
    exercise(_id: ID!): Exercise
    # exercise(exerciseName: String): Exercise
    topPlayers: [Player]
    userData: UserData
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addExercise(
      exerciseName: String!
      weight: Int
      repetitions: Int
      time: Int
      notes: String
    ): Exercise

    # addExercise(exerciseName: String!): Exercise
    # addUserExercise(exerciseId: ID!, weight: Int, repetitions: Int, time: Int, notes: String): Exercise
    # removeUserExercise(exerciseId: ID!, userExerciseId: ID!): Exercise
  }
`;

module.exports = typeDefs;

const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User{
        _id: ID
        username: String
        email: String
        recipesCount: Int
        savedRecipes: [Recipe]
    }

    type Recipe{
        recipeId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    input recipeInput{
        recipeId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth{
        token: ID
        user: User
    }

    type Query{
        me: User
    }

    type Mutation{
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveRecipe (input: recipeInput): User
        removeRecipe (recipeId: String!): User
    }
`
module.exports = typeDefs;
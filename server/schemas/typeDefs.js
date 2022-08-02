const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User{
        _id: ID
        username: String
        email: String
        recipeCount: Int
        savedRecipes: [Recipe]
    }

    type Recipe{
        recipeId: Int
        title: String
        cuisines: [String]
        extendedIngredients: [String]
        summary: String
        instructions: String
        vegetarian: Boolean
        glutenFree: Boolean
        healthScore: Int
        image: String
        sourceUrl: String
    }

    input recipeInput{
        recipeId: Int
        title: String
        cuisines: [String]
        extendedIngredients: [String]
        summary: String
        instructions: String
        vegetarian: Boolean
        glutenFree: Boolean
        healthScore: Int
        image: String
        sourceUrl: String
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
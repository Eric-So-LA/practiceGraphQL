var { buildSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');


var Ability = new GraphQLObjectType({
	name: "Ability",
	description: "Abilities the hero can cast",
	fields: {
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		damage: {type: GraphQLInt },
		stun: { type: GraphQLInt }

	}
})
var Hero = new GraphQLObjectType({
	name: "Hero",
	fields: {
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		abilities: {type: new GraphQLList(Ability)}
	}
})
var Schema = buildSchema(`
	type Query {
  		heroes: {
  			
  		}
	}
`);

module.exports = {
	Schema: Schema
}
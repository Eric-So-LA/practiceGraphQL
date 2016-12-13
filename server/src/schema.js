var { buildSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLSchema } = require('graphql');


var sampleDatabase = {
	Heroes: [{
		_id: "lina",
		name: "Lina",
		abilities: [
			{
				_id: "lagunaBlade",
				name: "LagunaBlade",
				damage: "10000"
			}
		]
	}]
}

var Ability = new GraphQLObjectType({
	name: "Ability",
	description: "Abilities the hero can cast",
	fields: () => {
		return {
			_id: { type: GraphQLString },
			name: { type: GraphQLString },
			damage: { type: GraphQLInt }
		}
	}
})
var Hero = new GraphQLObjectType({
	name: "Hero",
	fields: () => {
		return {
			_id: { type: GraphQLString },
			name: { type: GraphQLString },
			abilities: {type: new GraphQLList(Ability)}
		}
	}
})
var Query = new GraphQLObjectType({
	name: "RootQuery",
	fields: {
		Heroes: {
			type: new GraphQLList(Hero),
			resolve: (rootValue, args, info) => {
				console.log("querying Heroes", rootValue, "args", args, "info", info);
				return "hi";
			}
		}
	}
})
module.exports = new GraphQLSchema({
	query: Query
})
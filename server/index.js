var graphqlHTTP = require('express-graphql');
var app = require('express')();
var Schema = require('./src/schema').Schema;
app.get('/', function(req, res){
	res.redirect('/graphql');
})

// var root = {
// 	rollDice: () => {
// 		return 'WUSUPUSSPUP';
// 	}
// }
app.use('/graphql', graphqlHTTP({ schema: Schema,  graphiql: true}))
app.listen(8181, function(){
	console.log('hihi 8181');
})
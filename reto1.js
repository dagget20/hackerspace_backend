var express = require('express');
var faker = require('faker');
var app = express();
var _ = require('lodash');

var generarUsuario = function (){
	var randomId = faker.finance.account();
	var randomName = faker.name.findName();
	var randomAddress = faker.address.streetAddress();
	var randomContent = faker.lorem.sentence();
	var randomDate = faker.date.past();
	var randomImage = faker.image.avatar();
	return{
		id: randomId,
		name: randomName,
		address: randomAddress,
		content: randomContent,
		date: randomDate,
		image: randomImage
	}
}

app.get('/posts', function(req,res){
	var cantidad = _.random(5,10)
	var usuarios = _.times(cantidad, generarUsuario)
	res.json(usuarios)
});

app.listen(3000);
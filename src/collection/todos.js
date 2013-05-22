var app = app || {};

var TodoList = Backbone.Collection.extend({
	model: app.Todo,
	
	localStorage: new Backbone.LocalStorage('Todos-backbone'),
	
});

app.todos = new TodoList();
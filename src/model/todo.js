var app = app || {};

app.Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	},
	
	initialize: function() {
		console.log('Model - Todo - has been initialized.');
		this.on('change', function() {
			console.log('This model has been changed.');
		});
	},
});
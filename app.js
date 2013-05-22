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

app.TodoView = Backbone.View.extend({
	tagName: 'li',
	
	todoTpl: _.template( $('#item-tpl').html() ),
	
	events: {
		'': '',
		'': '',
		'': ''
	},
	
	render: function() {
	
  	},

  	edit: function() {
  	
  	},

  	close: function() {
  	
  	},

  	updateOnEnter: function( e ) {
  	
  	}
});

app.AppView = Backbone.View.extend({
	el: '#app',
	
	initialize: function() {
		console.log('AppView has been initialized');
		this.input = this.$('#new-todo');
	},
	
	events: {
		'keypress #new-todo': 'create'
	},
	
	render: function() {
	
  	},

  	create: function(e) {
  		if ( e.which !== ENTER_KEY || !this.input.val().trim() ) {
        	return;
      	}

      	this.input.val('');
  	},

  	close: function() {
  	
  	},

  	updateOnEnter: function( e ) {
  	
  	}
});

var ENTER_KEY = 13;

$(document).ready(function() {
	new app.AppView();
});
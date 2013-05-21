var Todo = Backbone.Model.extend({
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

var TodoView = Backbone.View.extend({
	tagName: 'li',
	
	todoTpl: _.template( $('#item-tpl').html() ),
	
	events: {
		'dblclick label': 'edit',
    	'keypress .edit': 'updateOnEnter',
    	'blur .edit':   'close'
	},
	
	render: function() {
    	this.$el.html( this.todoTpl( this.model.toJSON() ) );
    	this.input = this.$('.edit');
    	return this;
  	},

  	edit: function() {
  	
  	},

  	close: function() {
  	
  	},

  	updateOnEnter: function( e ) {
  	
  	}
});

var todoView = new TodoView();

console.log(todoView.el);
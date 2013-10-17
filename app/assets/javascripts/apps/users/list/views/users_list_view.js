Groominati.module('UsersApp.List', function(List, Groominati, Backbone, Marionette, $, _) {

	List.UserItemView = Marionette.ItemView.extend({

		template: 'users/user_item',
		tagName: "li",

		events: {
			"click": "highlightName"
		},

		highlightName: function(e){
			e.preventDefault();
			//$('ul').listview('refresh');
			//this.$el.toggleClass('warning');
			//$("#david").trigger('create');
			//alert("i was clicked");
		},

		onShow: function(){
			$('.ui-listview').listview('refresh');
		},


	});

	List.UsersView = Marionette.CompositeView.extend({

		template: 'users/users',
		itemView: List.UserItemView,
		itemViewContainer: 'ul'


	});


});
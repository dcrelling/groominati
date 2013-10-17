Groominati.module('PostsApp.List', function(List, Groominati, Backbone, Marionette, $, _) {

	List.PostItemView = Marionette.ItemView.extend({

		template: 'posts/post_item',
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

	List.PostsView = Marionette.CompositeView.extend({

		template: 'posts/posts',
		itemView: List.PostItemView,
		itemViewContainer: 'ul'


	});


});
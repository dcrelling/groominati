Groominati.module("PostsApp.List", function(List, Groominati, Backbone, Marionette, $, _) {

	List.Controller = {
		listPosts: function() {

			var posts = Groominati.request("posts:entities");
			var postsListView = new List.PostsView({collection: posts});
			Groominati.mainRegion.show(postsListView);
		}
	};

});
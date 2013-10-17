Groominati.module("PostsApp", function(PostsApp, Groominati, Backbone, Marionette, $, _) {

	PostsApp.Router = Marionette.AppRouter.extend({

		appRoutes: {
			"posts": "listPosts"
		}
	});

	var API = {
		listPosts: function() {
			Groominati.PostsApp.List.Controller.listPosts();
		}
	};

	Groominati.addInitializer(function() {
		new PostsApp.Router({
			controller: API
		});
	});


});
Groominati.module("UsersApp", function(UsersApp, Groominati, Backbone, Marionette, $, _) {

	UsersApp.Router = Marionette.AppRouter.extend({

		appRoutes: {
			"users": "listUsers"
		}
	});

	var API = {
		listUsers: function() {
			Groominati.UsersApp.List.Controller.listUsers();
		}
	};

	Groominati.addInitializer(function() {
		new UsersApp.Router({
			controller: API
		});
	});


});
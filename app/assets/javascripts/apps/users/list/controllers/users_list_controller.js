Groominati.module("UsersApp.List", function(List, Groominati, Backbone, Marionette, $, _) {

	List.Controller = {
		listUsers: function() {

			var users = Groominati.request("users:entities");
			var usersListView = new List.UsersView({collection: users});
			Groominati.mainRegion.show(usersListView);
			console.log('ass');
		}
	};

});
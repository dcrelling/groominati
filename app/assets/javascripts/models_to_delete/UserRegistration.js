var UserRegistration = Backbone.Model.extend({
urlRoot: '/users.json',

defaults: {
	"email": "",
	"password": "",
	"password_confirmation": ""
}


});

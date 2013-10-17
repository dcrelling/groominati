Groominati.module('Entities', function(Entities, ContactManager, Backbone, Marionette, $, _) {


    //###########################

    //private attributes

    var API = {
        getUsers: function() {
            var users = new Entities.UsersCollection();
            users.fetch();
            return users;
        }
    };

    //public attributes
    Entities.User = Backbone.Model.extend({
        urlRoot: "users"
    });

    Entities.UsersCollection = Backbone.Collection.extend({
        url: "users",
        model: Entities.User

    });

    Groominati.reqres.setHandler("users:entities", function() {
        return API.getUsers();
    });




});
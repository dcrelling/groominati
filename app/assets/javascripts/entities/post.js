Groominati.module('Entities', function(Entities, ContactManager, Backbone, Marionette, $, _) {


    //###########################

    //private attributes

    var API = {
        getPosts: function() {
            var posts = new Entities.PostsCollection();
            posts.fetch();
            return posts;
        }
    };

    //public attributes
    Entities.Post = Backbone.Model.extend({
        urlRoot: "posts"
    });

    Entities.PostsCollection = Backbone.Collection.extend({
        url: "posts",
        model: Entities.Post

    });

    Groominati.reqres.setHandler("posts:entities", function() {
        return API.getPosts();
    });




});

var UsersRouter = Backbone.Router.extend({
routes: {
	"": "index"
	"users/:id": "show"
	"users/new": "new"
	"users/:id/edit": "edit"
},

index: function(){
    alert('Hello, world!  This is a Backbone router action.');
    var usersCollection = new UsersCollection();
    usersCollection.fetch();
    //reviewCollection.add({"content":"This is my first review.","created":"2013-03-13T01:51:00Z","created_at":"2013-03-13T01:51:31Z","id":1,"title":"My Frist Review","updated_at":"2013-03-13T01:51:31Z"});
    //console.log(reviewCollection.length);
    var view = new ReviewsIndex({collection: usersCollection});
    $('body').html(view.render().$el);
},

show: function(id){

},

new: function(){

},

edit: function(id){
	
}
});

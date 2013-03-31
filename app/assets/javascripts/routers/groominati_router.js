var GroominatiRouter = Backbone.Router.extend({
routes: {
	"": "index",
	"reviews/:id": "show",
	"reviews/new": "new",
	"reviews/:id/edit": "edit"
},

index: function(){
    //var reviewsCollection = new ReviewsCollection();
    //reviewsCollection.fetch({
        //success: function() {
            //console.log(reviewsCollection.toJSON());
        //}
   // });
    //reviewsCollection.add({"content":"This is my first review.","created":"2013-03-13T01:51:00Z","created_at":"2013-03-13T01:51:31Z","id":1,"title":"My Frist Review","updated_at":"2013-03-13T01:51:31Z"});
    //console.log(reviewCollection.length);
    var view = new ReviewsIndex({collection: Groominati.reviewsCollection});
    $('body').html(view.render().$el);
},

show: function(id){

},

new: function(){

},

edit: function(id){
	
}

});

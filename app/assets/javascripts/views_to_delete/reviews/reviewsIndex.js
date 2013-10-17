var ReviewsIndex = Backbone.View.extend({

    template: JST["reviews/index"],


    events: {
    "click a.createReview": "createReview",
    "click #getUsersButton": "getUsers"
    },


    initialize: function(){
        this.collection.bind("reset", this.render, this);
    },

    render: function () {
        var self = this;
        this.$el.html(this.template);
        this.collection.each(function(review, index){
            var reviewItem = new ReviewItem({model: review});
            self.$('table').append(reviewItem.render().el);
        });
        return this;
    }, 

    createReview: function(){
    	alert("here");
        var createReviewForm = new CreateReviewForm();
        $('body').html(createReviewForm.render().$el);
    },

    getUsers: function(event){
        //event.preventDefault();
        //var userCollection = new UsersCollection();
        //userCollection.fetch();
        Backbone.history.navigate("users", true);

    }

});

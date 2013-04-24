var ReviewsIndex = Backbone.View.extend({

 events: {
    "click a.createReview": "createReview"
    },

    render: function () {
        var self = this;
        this.$el.html(JST["reviews/index"]());
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
    }

});

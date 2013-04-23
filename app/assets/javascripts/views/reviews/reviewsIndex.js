var ReviewsIndex = Backbone.View.extend({

    render: function () {
        var self = this;
        this.$el.html(JST["reviews/index"]());
        this.collection.each(function(review, index){
            var reviewView = new ReviewView({model: review, index: index});
            self.$('table').append(reviewView.render().el);
        });
        return this;
    }

});

var ReviewsIndex = Backbone.View.extend({

    render: function () {
        alert("in the view render");
        var self = this;
        this.$el.html(JST["reviews/index"]());
        this.collection.each(function(review){
            var reviewView = new ReviewView({model: review});
            self.$('table').append(reviewView.render().el);
        });
        return this;
    }

});

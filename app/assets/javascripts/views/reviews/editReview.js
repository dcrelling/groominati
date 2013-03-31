var EditReview = Backbone.View.extend({
  
  render: function () {
        var self = this;
        this.$el.html(JST["reviews/editReview"]());
        return this;
    }



});
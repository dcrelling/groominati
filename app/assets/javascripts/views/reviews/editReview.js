var EditReview = Backbone.View.extend({
  
  render: function () {
        var self = this;
        this.$el.html(JST["reviews/editReview"]({model: this.model}));
        return this;
    }



});
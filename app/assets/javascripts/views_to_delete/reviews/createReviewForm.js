var CreateReviewForm = Backbone.View.extend({
  
events: {
    "click button.submitButton": "formSubmit"
    },

  render: function () {
        var self = this;
        this.$el.html(JST["reviews/createReviewForm"]({model: this.model}));
        return this;
    },

  formSubmit: function(evt){
      evt.preventDefault();
      var data = Backbone.Syphon.serialize(this);
      var reviewModel = new ReviewModel(data);
      reviewModel.save();
  }, 

});
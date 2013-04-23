var EditReviewForm = Backbone.View.extend({
  
events: {
    "click button.submitButton": "formSubmit"
    },

  render: function () {
        var self = this;
        this.$el.html(JST["reviews/editReview"]({model: this.model}));
        return this;
    },

  formSubmit: function(evt){
      evt.preventDefault();
      var data = Backbone.Syphon.serialize(this);
      this.model.set(data);
      this.model.save();
  }, 

});
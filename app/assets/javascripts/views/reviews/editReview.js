var EditReview = Backbone.View.extend({
  
events: {
    "click button.editButton": "edit"
    },

  render: function () {
        var self = this;
        this.$el.html(JST["reviews/editReview"]({model: this.model}));
        return this;
    },

  edit: function(){
      alert("shit working");
  }, 

  save: function(){

  } 





});
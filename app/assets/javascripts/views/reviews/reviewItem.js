var ReviewItem = Backbone.View.extend({

    tagName: "tr",

    events: {
    "click a.editReview": "editReview",
    "click a.showReview": "showReview",
    "click a.deleteReview": "deleteReview"
    },

    initialize: function(options){
    },

    render: function(){
        this.$el.html(JST["reviews/reviewItem"]({ model: this.model}));
        return this;
    },

    editReview: function(){
        var editReviewForm = new EditReviewForm({model: this.model});
        $('body').html(editReviewForm.render().$el);
    },

    showReview: function(){
        alert("show");
    },

    deleteReview: function(){
        alert("delete");
    }
});

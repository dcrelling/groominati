var ReviewView = Backbone.View.extend({

    tagName: "tr",

    events: {
    "click a.editReview": "editReview",
    "click a.showReview": "showReview",
    "click a.deleteReview": "deleteReview",
    "click a.newReview": "newReview"
    },

    initialize: function(options){
    },

    render: function(){
        this.$el.html(JST["reviews/review"]({ model: this.model}));
        return this;
    },

    editReview: function(){
        var editReviewForm = new EditReviewForm({model: this.model});
        console.log(editReviewForm.el);
        $('body').html(editReviewForm.render().$el);
    },

    showReview: function(){
        alert("show");
    },

    deleteReview: function(){
        alert("delete");
    },

    newReview: function(){
        alert("delete");
    }
});
